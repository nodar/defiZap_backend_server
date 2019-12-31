const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')

const routes = require('./routes/index')
const zaps = require('./routes/zaps')

const app = express()
const port = process.env.PORT || "8000"

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))
app.use(cors())

app.use('/', routes)
app.use('/zaps', zaps)

app.use((req,res,next) =>{
    let error = new Error('Not Found');
    error.status = 404
    next(error)
})


module.exports = app