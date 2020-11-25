const express = require('express')
const router = express.Router()
const homePage = require('../controller/main')
router.get('/user',(homePage.user))
// req.session.displayId
module.exports = router