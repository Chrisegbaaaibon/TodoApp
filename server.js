const express = require('express');

const dotenv = require('dotenv')

const morgan = require('morgan')
const bodyparser = require ("body-parser");
const path = require('path')
const app = express();

const connectDB = require('./server/database/connection');

dotenv.config({path:'config.env'})

const PORT = process.env.PORT||8080

// log request
app.use(morgan('tiny'))

// mongodb connection
connectDB();


//   parse request
app.use(express.urlencoded({extended:true}))

// set view engine
app.set('view engine', 'ejs') // ejs\html\pug

// if the view folder has another folder, use:
// app.set('views', path.resolve(./dirname, 'views/ejs))

// load assets
app.use('/css', express.static(path.resolve(__dirname, 'assets/css')))
app.use('/img', express.static(path.resolve(__dirname, 'assets/img')))
app.use('/js', express.static(path.resolve(__dirname, 'assets/js')))

// load routers
app.use('/', require('./server/routes/router'))

app.listen(8558, ()=>{console.log(`Server is running on http://localhost:${8558}`)});