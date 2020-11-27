const express = require('express')
const fs = require('fs')
const cookieParser = require('cookie-parser')
const http = require('http')
const sql= require('./db/db_connection');
const morgan = require('morgan')
const logger = require('./utils/logger')
const bodyParser = require('body-parser')
const session = require('express-session')
const MySQLStore = require('express-mysql-session')(session);
const path = require('path')
const pug = require('pug')
const app = express()
const server = http.createServer(app)
const signUp = require('./routes/signup');
const login = require('./routes/login')
const home = require('./routes/home')
const coffe = require('./routes/coffe')
const sport = require('./routes/sport')
const education = require('./routes/education')
const detail = require('./routes/details')
const user = require('./routes/user')
const admin = require('./routes/admin')
const ErrorPage = require('./routes/error');

// create logs for morgan
var accessLogStream = fs.createWriteStream(path.join(__dirname, './logs/morganLogs.log'), { flags: 'a' })

// set engine
app.set('view engine','pug')
app.set('views','views')
// middleware
app.use(cookieParser())
 var options = {
        host: 'localhost',
        port: 3306,
        user: 'laitec',
        password: 'Reza1989@',
        database: 'laitec'
    };
     
var sessionStore = new MySQLStore(options);

async function ses (){
    await app.use(session({
        key: 'session_cookie_name',
        secret: 'session_cookie_secret',
        store: sessionStore,
        resave: false,
        saveUninitialized: false
    }));
}
ses()
app.use(morgan('combined', { stream: accessLogStream }))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))
app.use(express.static(path.join(__dirname,'./public')))

// routes
app.use(admin)
app.use(home)
app.use(coffe)
app.use(sport)
app.use(education)
app.use(signUp)
app.use(login)
app.use(detail)
app.use(user)
app.get('/500',ErrorPage.get500)
app.use(ErrorPage.get404)
app.use((error,req,res,next)=>{
    res.status(500).render('500',{title : 'Error'})
})
//.....
const port = process.env.PORT || 3000
try {
    server.listen(port,()=>{
        logger.info(`App Connect to port: ${port}`)
    })
} catch (error) {
    logger.error(`App Cannot Connect to port: ${port}`)
}