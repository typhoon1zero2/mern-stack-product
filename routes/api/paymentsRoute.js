const router = require('express').Router()
const paymentCtrl = require('../../controllers/api/paymentsCtrl')


router.route('/payment')
    .get(paymentCtrl.getPayments)
    .post(paymentCtrl.createPayment)


module.exports = router