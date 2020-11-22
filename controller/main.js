// HOME PAGE
const sql = require('../db/db_connection')

module.exports.home = (req,res,next)=>{
 function read (read){
        return new Promise((resolve,reject)=>{
            for (i=0;i<read.length;i++)
            resolve(res.render('home',{title : 'Laitec Fun Page',a: read}))
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
    function coffe (m,a){
        return new Promise((resolve,reject)=>{
            // for (i=0;i<m.length;i++)
            resolve(res.render('coffe',{title : 'Restorant & Coffe Page',category : 'رستوران و کافی شاپ',most : m ,all:a}))
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
    function sport (m,a){
        return new Promise((resolve,reject)=>{
            // for (i=0;i<m.length;i++)
            resolve(res.render('sport',{title : 'Sport Page',category :'مجتمع ورزشی',most : m ,all:a}))
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
module.exports.education = async (req,res,next)=>{
    function education (m,a){
        return new Promise((resolve,reject)=>{
            // for (i=0;i<m.length;i++)
            resolve(res.render('education',{title : 'Education Page',category :'تخفیفات آموزشی',most : m ,all:a}))
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