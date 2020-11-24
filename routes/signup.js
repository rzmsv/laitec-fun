const express = require('express')
const router = express.Router()
const signUpPage = require('../controller/main')
const sql= require('../db/db_connection');

router.get('/signup',signUpPage.signup)
router.post('/signup',(req,res)=>{
    var name = req.body.name
    var lastname = req.body.lastname
    var user = req.body.user
    var email = req.body.email
    var password = req.body.password
    if(!res){
        res.redirect('/')
    }
    res.redirect('signup')
    sql.create(name,lastname,user,email,password)
})

module.exports = router