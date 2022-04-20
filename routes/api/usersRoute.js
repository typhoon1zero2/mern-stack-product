const express = require('express');
const router = express.Router();
const usersCtrl = require('../../controllers/api/users');
const ensureLoggedIn = require('../../config/ensureLoggedIn');
const auth = require('../...config/auth')

router.post('/register', usersCtrl.register)
router.post('/login', usersCtrl.login)
router.get('/logout', usersCtrl.logout)
router.get('/check-token', ensureLoggedIn, usersCtrl.checkToken)
router.patch('/addKart', auth, usersCtrl.addKart)
router.get('/info', auth,  usersCtrl.getUser)
router.get('/history', auth, usersCtrl.history)

module.exports = router
