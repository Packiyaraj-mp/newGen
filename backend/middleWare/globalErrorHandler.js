module.exports=(err,req,res,next)=>{
        let message=err.message;
        let error=new Error(message);

        err.statusCode=err.statusCode || 500;



    if(err.name==="ValidationError"){
       const fetchMsg= Object.values(err.errors).map(e=>e.message);
       message=fetchMsg[0];
       error=new Error(message);
       err.statusCode=400;
    
       
    }
    if(err.code===11000){
        message=`user is already exist`;
        error=new Error(message);
        err.statusCode=400;
        
    }
    return res.status(err.statusCode).json({
        msg:message
        
    });


}