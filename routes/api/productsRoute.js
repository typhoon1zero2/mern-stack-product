const router = require('express').Router()
const productCtrl = require('../../controllers/api/productsCtrl')

// to Create (POS /api/product)
router.route('/products')
    .get(productCtrl.getProducts)
    .post(productCtrl.createProducts)

//Deleted && Update 
//http://localhost:3001/api/products/:id
router.route('/products/:id')
    .delete(productCtrl.deletedProduct)
    .put(productCtrl.updatedProduct)



module.exports = router