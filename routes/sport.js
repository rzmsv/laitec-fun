const sportPage = require('../controller/main')
const express = require('express')
const router = express.Router()

router.get('/sport',sportPage.sport)
module.exports = router