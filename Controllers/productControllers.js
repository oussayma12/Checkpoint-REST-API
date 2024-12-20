const Product = require("../Models/productSchema")

const createProduct = async(req,res)=> {
    try {
        const newProduct=new Product(req.body)
        await newProduct.save()
        res.status(201).json({msg:"product created!", Product :newProduct })
    } catch (error) {
        res.status(500).json({msg:error.msg})
    }
}


const getProduct = async (req,res) => {
    try {
        const product = await Product.find()
        res.status(201).json({msg:"product found" , product:product})
    } catch (error) {
        res.status(500).json({msg:error.msg})
        
    }
}


const updateProduct = async (req, res) => {
    try {
        const product = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!product) return res.status(404).json({ msg: "Product not found" });
        res.status(201).json({ msg: "Product updated", product });
    } catch (error) {
        res.status(500).json({ msg: error.message });
    }
};


const deleteProduct = async (req, res) => {
    try {
        const product = await Product.findByIdAndDelete(req.params.id);
        if (!product) return res.status(404).json({ msg: "Product not found" });
        res.status(201).json({ msg: "Product deleted" });
    } catch (error) {
        res.status(500).json({ msg: error.message });
    }
};



module.exports = {createProduct , getProduct , updateProduct , deleteProduct}