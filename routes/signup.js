const express = require('express')
const router = express.Router()
const signUpPage = require('../controller/main')

router.get('/signup',signUpPage.signup)
router.post('/signup',(req,res)=>{
    const title = req.body.title
    res.redirect('signup')  
    createUser(title)
})

module.exports = router