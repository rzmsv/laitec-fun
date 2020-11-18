const express = require('express')
const router = express.Router()
const signUpPage = require('../controller/main')
const sql= require('../db/db_connection');

router.get('/signup',signUpPage.signup)
router.post('/signup',(req,res)=>{
    const name = req.body.name
    const lastname = req.body.lastname
    const user = req.body.user
    const email = req.body.email
    if(!res){
        res.redirect('/')
    }
    res.redirect('signup')
    sql.create(name,lastname,user,email)
})

module.exports = router