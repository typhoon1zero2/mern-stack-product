const router = require('express').Router()
const productCtrl = require('../../controllers/api/productsCtrl')

router.route('/products')
    .get(productCtrl.getProducts)
    .post(productCtrl.createProducts)


router.route('/products/:id')
    .delete(productCtrl.deletedProducts)
    .put(productCtrl.updatedProducts)



module.exports = router