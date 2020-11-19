const express = require('express')
const router = express.Router()
const logPage = require('../controller/main')
router.get('/login',logPage.login)
router.post('/login',logPage.postLogin)
module.exports = router