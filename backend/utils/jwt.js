const sendToken=(res,user,statusCode)=>{
      const authToken= user.getJwtToken();
      const options={
            expires:new Date(Date.now()+7*24*60*60*1000),
            httpOnly:true
      }
      return res.status(statusCode).cookie('authToken',authToken,options).json({
             user,
             authToken,
             success:true
      })
  }




module.exports=sendToken;