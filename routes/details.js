const express = require('express')
const router = express.Router()
const homePage = require('../controller/main')
router.get('/:id',homePage.detail)
module.exports = router