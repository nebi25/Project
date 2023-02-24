const Cart = require('../models/cart.model')

module.exports.getAllProducts = (req,res) => {
    Cart.find()
        .then(allProducts => res.json(allProducts))
        .catch(err => res.json({message:'Products are missing',err}))
}

module.exports.createProduct = (req,res) => {
    Cart.create(req.body)
        .then(newProduct => res.json(newProduct))
        .catch(err => res.status(400).json({message:'Could not create the product',err}))
}

module.exports.getOneProduct = (req,res) => {
    Cart.findOne({_id: req.params.id})
        .then(OneProduct => res.json(OneProduct))
        .catch(err => res.json({message:'Product is missing',err}))
}

module.exports.editProduct = (req,res) => {
    Cart.updateOne({
        _id:req.params.id},
        req.body,
        {new:true})
        .then(editProduct => res.json(editProduct))
        .catch(err => res.json({message:'Could not edit the product',err}))
}

module.exports.deleteProduct = (req,res) => {
    Cart.deleteOne({_id:req.params.id})
        .then(deleteOne => res.json(deleteOne))
        .catch(err => res.json({message:'Could not delete the product',err}))
}

module.exports.deleteAll = (req,res) => {
    Cart.deleteMany()
        .then(deleteOne => res.json(deleteOne))
        .catch(err => res.json({message:'Could not delete the product',err}))
}