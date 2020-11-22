const express = require('express')
const router = express.Router()
const homePage = require('../controller/main')
const sql= require('../db/db_connection');


router.get('/admin',(homePage.admin))
router.post('/admin',(req,res)=>{
     var category = req.body.cat
     var main_pic = req.body.image1
     var name = req.body.name
     var off = req.body.off
     var address = req.body.address1
     var image1 = req.body.image11
     var image2 = req.body.image12
     var image3 = req.body.image13
     var description = req.body.description
     var timeout = req.body.timeout
     res.redirect('/admin')
     sql.insertOffersTable(category,main_pic,name,off,address,image1,image2,image3,description,timeout)
})
router.post('/edit',(req,res)=>{
     var name = req.body.name
     var off = req.body.off
     var timeout = req.body.timeout
     res.redirect('/admin')
     sql.editOffer(name,off,timeout)
})
router.post('/del',(req,res)=>{
     var name = req.body.name
     sql.deleteOffer(name)
     res.redirect('/admin')
})
module.exports = router

//