const express = require('express')
const images = require('../controllers/images')
const router = new express.Router()

router.get('/categories', images.getCategoriesImages)
router.get('/gif', images.getImages)
router.get('/static', images.getImages)

module.exports = router
