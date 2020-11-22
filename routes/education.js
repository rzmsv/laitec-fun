const educationPage = require('../controller/main')
const express = require('express')
const router = express.Router()

router.get('/education',educationPage.education)
module.exports = router