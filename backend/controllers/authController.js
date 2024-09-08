const catchAsyncErrorHandler = require("../middleWare/catchAsyncErrorHandler");
const UserModel = require("../models/userShema");
const sendEmail = require("../utils/email");
const GlobalError = require("../utils/globalerrorClass");
const sendToken = require("../utils/jwt");
const crypto=require('crypto');

exports.register=catchAsyncErrorHandler(async(req,res,next)=>{
  
    let avatar;
    let contentType;
    
     if(req.file){
       avatar=req.file.buffer;
       avatar=avatar.toString('base64');
       contentType=req.file.mimetype
      
     }
  
    const user= await UserModel.create({
      contentType,
      avatar,
      name:req.body.name,
      email:req.body.email,
      password:req.body.password
    })
    
    sendToken(res,user,201);
  
});

exports.login=catchAsyncErrorHandler(async(req,res,next)=>{
 
   const {email,password}=req.body;

    if(!email || !password){
         return next(new GlobalError('invalid email or password',400));
    }

    const user= await UserModel.findOne({email}).select('+password');

    if(!user){
      return next(new GlobalError('user does not exist',400));
    }

    if(!await user.isValidPassword(password)){
      return next(new GlobalError('password does not match',400));
    }

    sendToken(res,user,201);

});

exports.getProfile=catchAsyncErrorHandler(async (req,res,next)=>{
      res.status(200).json({
           success:true,
           user:req.user
       });
});

exports.forgetPassword=catchAsyncErrorHandler(async (req,res,next)=>{
  
   const user=await UserModel.findOne({email:req.body.email});

  if(!user){
   return next(new GlobalError('User does not exist',400))
  }

  const Token=await user.getResetToken();

  await user.save({validateBeforeSave:false});
  let BASE_URL=process.env.FRONTEND_URL;

  if(process.env.NODE_ENV==="production"){
       BASE_URL=`${req.protocol}://${req.get('host')}`
  }
  const resetUrl=`${BASE_URL}/reset/password/${Token}`;

  const message=`Your password reset url is as follow \n\n ${resetUrl} \n\n if you have not requested this email ignore it.`;
try{
  await sendEmail({
    email:user.email,
    message,
    subject:'newGen password recover'
   });

   res.status(200).json({
     success:true,
     message:`email send to ${user.email}`
 });
  
  }catch(err){
     user.resetPasswordToken=undefined,
     user.resetPasswordTokenExpire=undefined,
     await user.save({validateBeforeSave:false});

  }
 
});

exports.resetPassword=catchAsyncErrorHandler(async(req,res,next)=>{
  console.log(req.body.password,req.body.confirmPassword)
  const token=crypto.createHash('sha256').update(req.params.token).digest('hex');

  const user=await UserModel.findOne({resetPasswordToken:token,resetPasswordTokenExpire:{$gt:Date.now()}});

  if(!user){
     return(next(new GlobalError('reset password is expired',400)));
  }
  if(req.body.password !== req.body.confirmPassword){
    return(next(new GlobalError('confirm password is not matched',400)));
  }

  user.password=req.body.password;
  user.resetPasswordToken=undefined;
  user.resetPasswordTokenExpire=undefined;
  await user.save({validateBeforeSave:false})

   sendToken(res,user,201);
  
});