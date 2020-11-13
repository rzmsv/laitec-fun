
// HOME PAGE
module.exports.home = (req,res)=>{
    res.render('home',{title : 'Laitec Fun Page'})
}
// Category PAGE
module.exports.category = (req,res,next)=>{
    res.render('category',{title : 'Category Page',category : 'رستوران و کافی شاپ' })
}
// signup
module.exports.signup =(req,res,next)=>{
    res.render('signup',{title:'SignUp Page'})
}
module.exports.detail = (req,res,next)=>{
    res.render('detail',{title : 'Detail Page'})
}
module.exports.user = (req,res,next)=>{
    res.render('user',{title : 'Wellcome'})
}
module.exports.admin = (req,res,next)=>{
    res.render('admin',{title :'Admin Page'})
}