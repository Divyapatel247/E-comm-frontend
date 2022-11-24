
const express = require('express');
const app = express();
// app.use('/assets',express.static('assets'))
// const bodyparser = require('body-parser');
// app.use(bodyparser.urlencoded({extends: true}));
app.use(express.json());
var encoder = express.urlencoded({extended:true});
// app.set('view engine','ejs');
// app.get("/profile/:name",function(req,res){
//     // res.sendFile(__dirname + '/home.html')
//     // console.warn(req.params.name)
//     data={email:'divy@gmail.com',address:'ahmedabed',skills:['html','css','c++','react']}
//     res.render('profile',{name:req.params.name})
// })
app.get("/login",function(req,res){
    res.render('login')
})
app.post("/login",encoder,function(req,res){
    console.warn(req.body)
    res.render('home')
})
app.get("/",function(req,res){
    res.render('home')
})
app.listen(5500);