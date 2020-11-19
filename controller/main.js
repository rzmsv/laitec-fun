// HOME PAGE
module.exports.home = (req,res)=>{
    var loggedIn = req.get('Cookie')
    res.render('home',{title : 'Laitec Fun Page',isAuth : loggedIn})
}
// Category PAGE
module.exports.category = (req,res,next)=>{
    res.render('category',{title : 'Category Page',category : 'رستوران و کافی شاپ' })
}
// signup
module.exports.signup =(req,res,next)=>{
    res.render('signup',{title:'SignUp Page'})
}
// login
module.exports.login =(req,res,next)=>{
 var loggedIn = req.get('Cookie')
 console.log(req.session.loggedIn)
    res.render('login',{title : 'Login Page',isAuth : loggedIn})
}
// post login
module.exports.postLogin = (req,res,next)=>{
    res.cookie('Cookies',req.cookies,{ expires: new Date(Date.now() + 5000), httpOnly: true })
    req.session.loggedIn = true
    res.redirect('/')
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