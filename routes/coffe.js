const coffePage = require('../controller/main')
const express = require('express')
const router = express.Router()

router.get('/coffe',coffePage.coffe)
module.exports = router