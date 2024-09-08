const mongoose=require('mongoose');

module.exports=()=>{
      mongoose.connect(`mongodb+srv://packiyaraj:Raj357890@shomo.iw9x3qe.mongodb.net/?retryWrites=true&w=majority&appName=shomo`)
      .then(con=>console.log(`DataBase Connect with host ${con.connection.host}`))
}