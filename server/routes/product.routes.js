const ProductController = require('../controllers/product.controller')
const {authenticate} = require('../config/jwt.config')


module.exports = (app) => {
    app.get('/api/AllProducts',ProductController.getAllProducts)
    app.post('/api/CreateProduct',authenticate,ProductController.createProduct)
    app.get('/api/OneProduct/:id',authenticate,ProductController.getOneProduct)
    app.put('/api/EditProduct/:id',authenticate,ProductController.editProduct)
    app.delete('/api/DeleteProduct/:id',authenticate,ProductController.deleteProduct)
}