const mongoose=require('mongoose');

const ProductShema= new mongoose.Schema({
      name:{
        type:String,
        required:[true,"please Enter product name"],
        maxLength:[100,"Product name maximum 100 characters"],
        trim:true
      },
      price:{
        type:Number,
        default:0.0,
        required:true
      },
      description:{
        type:String,
        required:'Please enter Product description'
      },
      ratings:{
        type:String,
        default:0.0
      },
      images:[{
         image:{
            type:String,
            required:true
         }
      }],
      category:{
         type:String,
         required:[true,'please enter product category'],
         enum:{
            values:[
                "Clay Home Products",
                "Clay Garden products",
                "Clay HandMade products",
                "Clay Kitchen Products"
            ],
            message:'please select correct category'
  
         }
      },
      seller:{
        type:String,
        required:[true,'please enter seller name']
      },
      stock:{
        type:String,
        required:[true,'please enter stock'],
        maxLength:[20,'maximum should be 20 stock']
      },
      noOfReviews:{
        type:Number,
        default:0
      },
      reviews:[
          {
            user:{
                type:mongoose.Schema.Types.ObjectId,
                ref:'user'
            },
            ratings:{
                type:String,
                required:true
            },
            comment:{
                 type:String,
                 required:true
            }
          }
        ],
        user:{
            type:mongoose.Schema.Types.ObjectId
        },
        createdAt:{
            type:Date,
            default:Date.now()
        }

});

const ProductModel=mongoose.model('product',ProductShema);

module.exports=ProductModel;