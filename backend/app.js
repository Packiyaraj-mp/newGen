const express=require('express');
const app=express();
const auth=require('./routes/auth');
const multer = require('multer');
const dotenv=require('dotenv');
const path=require('path');
const cookieParser=require('cookie-parser');
const globalErrorHandler = require('./middleWare/globalErrorHandler');

app.use(express.json());
dotenv.config({path:path.join(__dirname,'/config/config.env')});
app.use(cookieParser())

// auth middleware
app.use('/',auth);

// gloabal error handler middleware
app.use(globalErrorHandler);


if(process.env.NODE_ENV="production"){
     app.use(express.static(path.join(__dirname,'../frontend/build',)));

     app.get('*',(req,res)=>{
          res.sendFile(path.resolve(__dirname,'../frontend/build/index.html'))
     });
}
module.exports=app;





