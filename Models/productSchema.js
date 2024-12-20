const mongoose = require("mongoose")
const productSchema = mongoose.Schema({
    title : String,
    description: String,
    price: Number,
    quantity:Number,
})

const Product= mongoose.model("Product", productSchema)
module.exports=Product