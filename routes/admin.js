const express = require('express')
const router = express.Router()
const homePage = require('../controller/main')
router.get('/admin',(homePage.admin))
module.exports = router