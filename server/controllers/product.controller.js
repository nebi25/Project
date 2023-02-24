const Product = require('../models/product.model')

module.exports.getAllProducts = (req,res) => {
    Product.find()
        .then(allProducts => res.json(allProducts))
        .catch(err => res.json({message:'Products are missing',err}))
}

module.exports.createProduct = (req,res) => {
    Product.create(req.body)
        .then(newProduct => res.json(newProduct))
        .catch(err => res.status(400).json({message:'Could not create the product',err}))
}

module.exports.getOneProduct = (req,res) => {
    Product.findOne({_id: req.params.id})
        .then(OneProduct => res.json(OneProduct))
        .catch(err => res.json({message:'Product is missing',err}))
}

module.exports.editProduct = (req,res) => {
    Product.updateOne({
        _id:req.params.id},
        req.body,
        {new:true})
        .then(editProduct => res.json(editProduct))
        .catch(err => res.json({message:'Could not edit the product',err}))
}

module.exports.deleteProduct = (req,res) => {
    Product.deleteMany({_id:req.params.id})
        .then(deleteOne => res.json(deleteOne))
        .catch(err => res.json({message:'Could not delete the product',err}))
}