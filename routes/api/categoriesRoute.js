// /routes/api/users.js
const router = require('express').Router()
//const router = express.Router();
const categoryCtrl = require('../../controllers/api/categoriesCtrl');
const auth = require('../../config/auth.js');
const authAdmin = require('../../config/authAdmin.js')

// POST /api/users/

router.route('/category')
    .get(categoryCtrl.getCategories)
    //.post(auth, authAdmin, categoryCtrl.createCategory)
    .post(categoryCtrl.createCategory)

router.route('/category/:id')
    .delete(categoryCtrl.deleteCategory)
    .put(categoryCtrl.updateCategory)

module.exports = router;