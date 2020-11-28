const express = require('express')
const router = express.Router()
const signUpPage = require('../controller/main')
const sql= require('../db/db_connection');

router.get('/signup',signUpPage.signup)
router.post('/signup',(req,res,next)=>{
    var name = req.body.name
    var lastname = req.body.lastname
    var user = req.body.user
    var email = req.body.email
    var password = req.body.password
    
    sql.create(name,lastname,user,email,password)
    
    sql.create()
    .then((res)=>{
        console.log(res)
    })
    .catch((err)=>{
        console.log(err)
    })
})

module.exports = router