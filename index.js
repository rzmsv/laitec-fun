const express = require('express')
const fs = require('fs')
const http = require('http')
const morgan = require('morgan')
const logger = require('./utils/logger')
const bodyParser = require('body-parser')
const path = require('path')
const pug = require('pug')
const app = express()
const server = http.createServer(app)
const signUp = require('./routes/signup')
const home = require('./routes/home')
const category = require('./routes/category')
const detail = require('./routes/details')
const user = require('./routes/user')
const admin = require('./routes/admin')
const ErrorPage = require('./routes/error')

// create logs for morgan
var accessLogStream = fs.createWriteStream(path.join(__dirname, './logs/morganLogs.log'), { flags: 'a' })

// set engine
app.set('view engine','pug')
app.set('views','views')
// middleware
app.use(morgan('combined', { stream: accessLogStream }))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))
app.use(express.static(path.join(__dirname,'./public')))

// routes
app.use(home)
app.use(category)
app.use(signUp)
app.use(detail)
app.use(user)
app.use(admin)

app.use(ErrorPage.error)
//.....
const port = process.env.PORT || 3000
try {
    server.listen(port,()=>{
        logger.info(`App Connect to port: ${port}`)
    })
} catch (error) {
    logger.error(`App Cannot Connect to port: ${port}`)
}