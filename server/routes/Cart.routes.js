const CartController = require('../controllers/Cart.controller')
const {authenticate} = require('../config/jwt.config')


module.exports = (app) => {
    app.get('/api/CartProducts',CartController.getAllProducts)
    app.post('/api/CreateCartProduct',authenticate,CartController.createProduct)
    app.get('/api/OneCartProduct/:id',authenticate,CartController.getOneProduct)
    app.put('/api/EditCartProduct/:id',authenticate,CartController.editProduct)
    app.delete('/api/DeleteCartProduct/:id',authenticate,CartController.deleteProduct)
    app.delete('/api/DeleteCartProduct',authenticate,CartController.deleteAll)
}