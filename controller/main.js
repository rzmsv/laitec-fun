// HOME PAGE
const { log } = require('winston')
const sql = require('../db/db_connection')

module.exports.home = (req,res,next)=>{
    var loggedIn = req.session.userLoggedIn
    var signed = req.session.adminLoggedIn
    var name = req.session.displayname
    try {
        function read (read){
            var name = req.session.displayname
            return new Promise((resolve,reject)=>{
            resolve(res.render('home',{title : 'Laitec Fun Page',name : name,a: read,loggedin : loggedIn,signed : signed}))
            })
        }
    } catch (error) {
        res.status(404).render('/404')
    }
    
async function display(){
    try {
        var one = await sql.readOffers()
        const two = await read(one)
    } catch (error) {
        console.log('ERROR IN 18 - 25 /home/or back to db folder')
        next(new Error (error))
    }
}
display()
}
// Coffe PAGE
module.exports.coffe = async (req,res,next)=>{
    var loggedIn = req.session.userLoggedIn
    var signed = req.session.adminLoggedIn
    var name = req.session.displayname
    function coffe (m,a){
        try {
            return new Promise((resolve,reject)=>{
                // for (i=0;i<m.length;i++)
                resolve(res.render('coffe',{title : 'Restorant & Coffe Page',category : 'رستوران و کافی شاپ',most : m ,all:a,loggedin : loggedIn,signed : signed,name:name}))
            })
        } catch (error) {
            res.status(404).render('/404')
            next()
        }
    }
async function displayCoffe(){
    try {
        var a = await sql.coffeMost()
        var b = await sql.coffeAll()
        var c = await coffe(a,b)
    } catch (error) {
        console.log('ERROR IN 43 - 54 /Coffe/or back to db folder')
        next(new Error (error))
    }
}
displayCoffe()
}
// .............

// sport PAGE
module.exports.sport = async (req,res,next)=>{
    var loggedIn = req.session.userLoggedIn
    var signed = req.session.adminLoggedIn
    var name = req.session.displayname
    try {
        function sport (m,a){
            return new Promise((resolve,reject)=>{
                // for (i=0;i<m.length;i++)
                resolve(res.render('sport',{title : 'Sport Page',category :'مجموعه ورزشی',most : m ,all:a,loggedin : loggedIn,signed : signed,name:name}))
            })
        }
    } catch (error) {
        res.status(404).render('/404')
        next()
    }
async function displaySport(){
    try {
        var a = await sql.sportMost()
        var b = await sql.sportAll()
        var c = await sport(a,b)
    } catch (error) {
        console.log('ERROR IN 73 - 83 /Sport/or back to db folder')
        next(new Error (error))
    }
}
displaySport()
}
// education

module.exports.education = async (req,res,next)=>{
    var loggedIn = req.session.userLoggedIn
    var signed = req.session.adminLoggedIn
    var name = req.session.displayname
    try {
        function education (m,a){
            return new Promise((resolve,reject)=>{
                // for (i=0;i<m.length;i++)
                resolve(res.render('education',{title : 'Education Page',category :'تخفیفات آموزشی',most : m ,all:a,loggedin : loggedIn,signed : signed,name:name}))
            })
        }
    } catch (error) {
        res.status(404).render('/404')
        next()
    }
async function displayEducation(){
    try {
        var a = await sql.educationMost()
        var b = await sql.educationAll()
        var c = await education(a,b)
    } catch (error) {
        console.log('ERROR IN 101 - 111 /education/or back to db folder')
        next(new Error (error))
    }
}
displayEducation()
}
// .............

// signup
module.exports.signup =(req,res,next)=>{
    var loggedIn = req.session.userLoggedIn
    var signed = req.session.adminLoggedIn
    async function signUp (){
        try {
            if (signed == 1){
                return await res.redirect('/')
            } else if (loggedIn == 1){
                return await res.redirect('/') 
            }
                return await res.render('signup',{title:'SignUp Page',loggedin:loggedIn,signed:signed})
        } catch (error) {
            console.log('ERROR IN 116 - 132 /Signup/or back to db folder')
            next()
        }
    }
    signUp()
}

// login
module.exports.login =(req,res,next)=>{
 var loggedIn = req.session.userLoggedIn
 var signed = req.session.adminLoggedIn

    try {
        if(loggedIn){
            console.log(req.session.userLoggedIn)
            res.render('user')
        }
        else if(signed){
            console.log(req.session.adminLoggedIn)
            res.render('admin')
        }
        else{ 
            
            res.render('login',{title : 'Login Page'})
        }
    } catch (error) {
        console.log('ERROR IN 139 - 160 /login/or back to db folder')
        next()
    }
}

// post login

module.exports.postLogin = (req,res,next)=>{
    var user = req.body.username
    var password = req.body.password
    async function cookie (one){
        try {
            req.session.displayname = one[0].name
            req.session.displayuser = one[0].user
            req.session.displaylastname = one[0].lastname
            req.session.displayId = one[0].id
        if (one[0].admin == 'no'){
            res.cookie('Cookies',req.cookies,{ expires: new Date(Date.now() + 1000), httpOnly: true})
            req.session.userLoggedIn = true
            return await res.redirect('/user')
        }
        else if(one[0].admin == 'yes' ){
            res.cookie('Signed Cookies',req.signedCookies,{ expires: new Date(Date.now() + 1000), httpOnly: true })
            req.session.adminLoggedIn = true
            return await res.redirect('/admin')
        }
        else{
            return await res.redirect('/login')
        }
        } catch (error) {
            res.redirect('/login')
        }
    }
    async function getUser (one){
        try {
            await cookie(one)
        } catch (error) {
            return res.redirect('/')
        }
        
    }
    async function displayUsers (){
        try {
            var one = await sql.loginUser(user,password)
            var two = await getUser(one)
        } catch (error) {
            console.log('ERROR IN 195 - 204 /postLogin/or back to db folder')
            next(new Error (error))
        }
    }
    displayUsers()
    
}

// ....................
// Detail
module.exports.detail = (req,res,next)=>{
    var id = req.params.id
    var loggedIn = req.session.userLoggedIn
    var signed = req.session.adminLoggedIn
    var name = req.session.displayname
    async function detailOne(){
        try {
            var one = await sql.detail(id)
            res.render('detail',{db:one[0],image:one[0].main_pic,loggedin : loggedIn,signed : signed,name:name})
        } catch (error) {
            next()
        }
    }
    detailOne()
}
// ..................
// USER ....

module.exports.user = (req,res,next)=>{
    var userName = req.session.displayuser
    var userlastname = req.session.displaylastname
    var loggedIn = req.session.userLoggedIn
    async function user (){
        try {
            if (loggedIn == true){
                return await res.render('user',{title :`Dear ${userName} welcome to User Page`,loggedin : loggedIn,name : userName,lastname:userlastname})
            }
            res.redirect('/')
        } catch (error) {
            res.status(404).render('/404')
        }
    }
    user()
}
module.exports.admin = (req,res,next)=>{
    var signed = req.session.adminLoggedIn
    var userName = req.session.displayname
    var userUser = req.session.displayuser
    async function admin (){
        try {
            if(signed == true){
                return await res.render('admin',{title :`Dear ${userUser} welcome to Admin Page`,loggedin : signed,name : userName,user:userUser})
            }
            res.redirect('/')
        } catch (error) {
            res.status(404).render('/404')
        }
    }
    admin()
}