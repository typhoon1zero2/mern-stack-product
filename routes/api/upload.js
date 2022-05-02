const router = require('express').Router()
const cloudinary = require('cloudinary')

const fs = require('fs')


// we will upload image on cloudinary
cloudinary.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.CLOUD_API_KEY,
    api_secret: process.env.CLOUD_API_SECRET
})

// Upload image only admin can use
router.post('/upload', (req, res) =>{
    try {

console.log(req.files)
res.json('test upload')

    } catch (err) {
        return res.status(400).json({msg: err.message})
    }
})



module.exports = router