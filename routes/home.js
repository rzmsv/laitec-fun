const express = require('express')
const router = express.Router()
const homePage = require('../controller/main')
router.get('/',homePage.home)
module.exports = router