const express = require('express');
const router = express.Router();
const usersCtrl = require('../../controllers/api/usersCtrl');
// const ensureLoggedIn = require('../../config/ensureLoggedIn');
const auth = require('../../config/auth')

//test router
//  router.post('/register', (req, res) =>{
//      res.json({ msg: "test router"})
//  })
//test controller
router.post('/register', usersCtrl.register)
router.get('/refresh_token', usersCtrl.refreshToken)
router.post('/login', usersCtrl.login)
router.get('/logout', usersCtrl.logout)
router.get('/check-token', usersCtrl.checkToken)
// router.patch('/addKart', auth, usersCtrl.addKart)
router.get('/info', auth ,  usersCtrl.getUser)
// router.get('/history', auth, usersCtrl.history)

module.exports = router
