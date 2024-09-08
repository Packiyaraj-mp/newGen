const mongoose=require('mongoose');
const jwt=require('jsonwebtoken');
const bcrypt=require('bcrypt');
const crypto=require('crypto');

const userShema=new mongoose.Schema({
      name:{
         type:String,
         required:[true,'please enter name']
      },
      email:{
         type:String,
         required:[true,'please enter email'],
         unique:true,
        
      },
      password:{
         type:String,
         required:[true,'please enter password'],
         maxlength:[6,'password cannot be exceed 6 character'],
         select:false
      },
      avatar:{
          type:String
      },
      contentType:{
          type:String
      },
      role:{
         type:String,
         default:"user"
      },
      resetPasswordToken:String,
      resetPasswordTokenExpire:Date,

      createdAt:{
        type:Date,
        default:Date.now()
      }
});

userShema.pre('save',async function(next){

     if(!this.isModified('password')){
        next()
     }
     this.password=await bcrypt.hash(this.password,10);
     
});
userShema.methods.getResetToken=async function(){

       const resetToken= crypto.randomBytes(20).toString('hex');
       this.resetPasswordToken=await crypto.createHash('sha256').update(resetToken).digest('hex');
       this.resetPasswordTokenExpire=Date.now() + 60 *60 *1000;
       
       return resetToken;

};

userShema.methods.getJwtToken=function(){
    return jwt.sign({id:this.id},process.env.JWT_SECRET_CODE,{
      expiresIn:process.env.JWT_EXPIRES_TIME
     })
};

userShema.methods.isValidPassword=async function(password){
     return  bcrypt.compare(password,this.password)
}

const UserModel= mongoose.model('user',userShema);

module.exports=UserModel;