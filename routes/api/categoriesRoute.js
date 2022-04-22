// /routes/api/users.js
const express = require('express');
const router = express.Router();
const categoryCtrl = require('../../controllers/api/categoriesCtrl');
const auth = require('../../config/auth.js');
const authAdmin = require('../../config/authAdmin.js')

router.route('/category')
    .get(categoryCtrl.getCategories)
    



module.exports = router;