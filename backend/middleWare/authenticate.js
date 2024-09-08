const jwt=require('jsonwebtoken');
const UserModel = require('../models/userShema');
const globalErrorHandler = require('./globalErrorHandler');
const catchAsyncErrorHandler = require('./catchAsyncErrorHandler');
const GlobalError = require('../utils/globalerrorClass');

exports.isAuthenticateUser=catchAsyncErrorHandler(async(req,res,next)=>{
     const {authToken}=req.cookies;
     if(authToken){
        const decode= jwt.verify(authToken,process.env.JWT_SECRET_CODE);

        req.user=await UserModel.findById(decode.id);
        if(!req.user){
            return next(new GlobalError('first login to use resorce',400))
        }

     }else{
        return next(new GlobalError('first login to use resorce',400))
     }
   
     next();
})