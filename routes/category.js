const categoryPage = require('../controller/main')
const express = require('express')
const router = express.Router()

router.get('/category',categoryPage.category)
module.exports = router