const express = require('express')
const router = express.Router()
const homePage = require('../controller/main')
router.get('/',homePage.home)
router.post('/',(req,res)=>{
     req.session.destroy(()=>{
          res.redirect('/')
     })
})
module.exports = router