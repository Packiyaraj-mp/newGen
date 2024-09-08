const multer = require('multer');
const GlobalError = require('../utils/globalerrorClass');

const  storage=multer.memoryStorage();

const upload=multer({
        storage:storage,
        limits:{
        fileSize: 1024*1024*10},

        fileFilter:(req,file,cb)=>{
          const allowedTypes=/|png|jpg|jpeg|webp/;
        
        if(allowedTypes.test(file.mimetype)===true){
             cb(null,true)
        }else{
            cb(new Error('file type not supported'),false);
        }
    }
        
  });

  const multerMiddleware=upload.single('avatar');

module.exports =multerErrorHandler=(req,res,next)=>{
   
    multerMiddleware(req,res,(err)=>{
      if(err instanceof multer.MulterError){
        if(err.code ==='LIMIT_FILE_SIZE'){
           return next(new GlobalError('file is too large',400))
        }
       
        return res.status(400).send(err.message)
    }else if(err){
        return next(new GlobalError('An unexpected error occured',400))
    }
    next()
          
    })
  }