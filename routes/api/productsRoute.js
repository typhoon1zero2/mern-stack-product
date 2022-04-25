const router = require('express').Router()
const productCtrl = require('../../controllers/api/productsCtrl')

router.route('/products')
    .get(productCtrl.getProducts)
    .post(productCtrl.createProducts)


router.route('/products/:id')
    .delete(productCtrl.deletedProduct)
    .put(productCtrl.updatedProduct)



module.exports = router