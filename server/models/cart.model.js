const mongoose = require('mongoose')
const CartSchema = mongoose.Schema({
    title:{
        type:String,
        required:[true,'Please add a title']
    },
    category:{
        type:String,
        enum:[
        'Electronics',
        'Cosmetics & Body Care',
        'Furniture & Decor',
        'Office Equipment',
        'Pet Care'
        ],
        required:[true,'Select a category']
    },
    description:{
        type:String,
        required:[true,'Please describe the product']
    },
    image:{
        type:String,
        required:[true,'Please show an image of what you are selling']
    },
    stock:{
        type : Number,
        required: true,
        default: 0
    },
    price:{
        type:String,
        required:[true,'Price of the product is required']
    },
    discount:{
        type:Number
    },
    status:{
        type: String,
        enum: ["new","sale","outDated"],
        default: "new"
    }
},{timestamps:true})
const Cart = mongoose.model('Cart',CartSchema)
module.exports = Cart;