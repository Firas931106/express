// import express
const express = require('express')
// instance express
const app = express()

//middlware 
const Datee = require('./middleware/Date')
app.use(Datee)
//route home
app.get('/home', function (req, res) {
    res.send('Home page')
})
//app use
app.use(express.static(__dirname + '/public/Home.html'))

// route Our Services
app.get('/Services',(req,res)=>{
    res.sendFile(__dirname+'/public/Service.html')
})

// route Contact Us
app.get('/Contact',(req,res)=>{
    res.sendFile(__dirname+'/public/Contact.html')
})
//route for wrong path
app.get('*', (req, res) => {
    res.send('ressource not found')
})
// port
const port = 5000;

// creat server
app.listen(port, err => {
    err ? console.log(err) : console.log(`server is running on port ${port}`)
})