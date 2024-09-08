const express=require('express');
const app=require('./app');

// DataBase connection
const Db_Connection=require('./db/dataBaseConnection');
Db_Connection();

app.listen(process.env.PORT,()=>{
    console.log(`server is running on port is:${process.env.PORT} in ${process.env.NODE_ENV}`)
});