// HOME PAGE
const { log } = require('winston')
const sql = require('../db/db_connection')

module.exports.home = (req,res,next)=>{
    var loggedIn = req.session.userLoggedIn
    var signed = req.session.adminLoggedIn
    console.log(loggedIn)
 function read (read){
        return new Promise((resolve,reject)=>{
            // for (i=0;i<read.length;i++)
            resolve(res.render('home',{title : 'Laitec Fun Page',a: read,loggedin : loggedIn,signed : signed}))
        })
    }    

async function display(){
    try {
        var one = await sql.readOffers()
        const two = await read(one)
    } catch (error) {
        console.log(error)
    }
}
display()
}
// Coffe PAGE
module.exports.coffe = async (req,res,next)=>{
    var loggedIn = req.session.userLoggedIn
    var signed = req.session.adminLoggedIn
    function coffe (m,a){
        return new Promise((resolve,reject)=>{
            // for (i=0;i<m.length;i++)
            resolve(res.render('coffe',{title : 'Restorant & Coffe Page',category : 'رستوران و کافی شاپ',most : m ,all:a,loggedin : loggedIn,signed : signed}))
        })
    }
async function displayCoffe(){
    try {
        var a = await sql.coffeMost()
        var b = await sql.coffeAll()
        var c = await coffe(a,b)
    } catch (error) {
        console.log(error)
    }
}
displayCoffe()
}
// .............

// sport PAGE
module.exports.sport = async (req,res,next)=>{
    var loggedIn = req.session.userLoggedIn
    var signed = req.session.adminLoggedIn
    function sport (m,a){
        return new Promise((resolve,reject)=>{
            // for (i=0;i<m.length;i++)
            resolve(res.render('sport',{title : 'Sport Page',category :'مجتمع ورزشی',most : m ,all:a,loggedin : loggedIn,signed : signed}))
        })
    }
async function displaySport(){
    try {
        var a = await sql.sportMost()
        var b = await sql.sportAll()
        var c = await sport(a,b)
    } catch (error) {
        console.log(error)
    }
}
displaySport()
}
// education

module.exports.education = async (req,res,next)=>{
    var loggedIn = req.session.userLoggedIn
    var signed = req.session.adminLoggedIn
    function education (m,a){
        return new Promise((resolve,reject)=>{
            // for (i=0;i<m.length;i++)
            resolve(res.render('education',{title : 'Education Page',category :'تخفیفات آموزشی',most : m ,all:a,loggedin : loggedIn,signed : signed}))
        })
    }
async function displayEducation(){
    try {
        var a = await sql.educationMost()
        var b = await sql.educationAll()
        var c = await education(a,b)
    } catch (error) {
        console.log(error)
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
        if (signed == 1){
            return await res.redirect('/')
        } else if (loggedIn == 1){
            return await res.redirect('/') 
        }
            return await res.render('signup',{title:'SignUp Page',loggedin:loggedIn,signed:signed})
    }
    signUp()
}




// login
module.exports.login =(req,res,next)=>{
 var loggedIn = req.session.userLoggedIn
 var signed = req.session.adminLoggedIn

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
}

// post login

module.exports.postLogin = (req,res,next)=>{
    var user = req.body.username
    var password = req.body.password
    async function cookie (one){
        req.session.displayname = one[0].name
        req.session.displayuser = one[0].user
        req.session.displaylastname = one[0].lastname
        req.session.displayId = one[0].id
        if (one[0].admin !== 'yes' ){
            res.cookie('Cookies',req.cookies,{ expires: new Date(Date.now() + 1000), httpOnly: true})
            req.session.userLoggedIn = true
            return await res.redirect('/user')
        }
        else{
            res.cookie('Signed Cookies',req.signedCookies,{ expires: new Date(Date.now() + 1000), httpOnly: true })
            req.session.adminLoggedIn = true
            return await res.redirect('/admin')
        }
    }
    
    function getUser (one){
        if (one.length === 0){
            res.redirect('/')
        }
        cookie(one)
    }
    async function displayUsers (){
        try {
            var one = await sql.loginUser(user,password)
            var two = await getUser(one)
        } catch (error) {
            console.log('DATABASE is empty !')
        }
    }
    displayUsers()
    
}

// ....................

// ..................

module.exports.detail = (req,res,next)=>{
    var loggedIn = req.session.userLoggedIn
    var signed = req.session.adminLoggedIn
    res.render('detail',{title : 'Detail Page',loggedin : loggedIn,signed : signed})
}
module.exports.user = (req,res,next)=>{
    var userId = req.session.displayId
    var userName = req.session.displayuser
    var userlastname = req.session.displaylastname
    var loggedIn = req.session.userLoggedIn
    async function user (){
        if (loggedIn == 1){
            return await res.render('user',{title :`Dear ${userName} welcome to User Page`,loggedin : loggedIn,name : userName,lastname:userlastname})
        }
        await res.redirect('/')
    }
    user()
}
module.exports.admin = (req,res,next)=>{
    var signed = req.session.adminLoggedIn
    var userName = req.session.displayname
    var userUser = req.session.displayuser
    async function admin (){
        if(signed == 1){
            return await res.render('admin',{title :`Dear ${userUser} welcome to Admin Page`,loggedin : signed,name : userName,user:userUser})
        }
        await res.redirect('/')
    }
    admin()
}