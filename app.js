
var express = require('express')
var path = require('path')
var cookieParser = require('cookie-parser')
var morganLogger = require('morgan')

const logger = require('./src/Helpers/logger')

var sql = require('./src/Services/Sequelize/connection')

var indexRouter = require('./src/Routes/index')
var placesRouter = require('./src/Routes/places')
var locationsRouter = require('./src/Routes/locations')
var tile38Router = require('./src/Routes/tile38')

var app = express()

app.use(morganLogger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())

sql.authenticate().then(()=>{
   logger.info('DB established connection successfully :)')
}).catch(error => {
         logger.error(error)
})

app.use('/', indexRouter)
app.use('/places', placesRouter)
app.use('/locations', locationsRouter)
app.use('/tile38', tile38Router)

module.exports = app
