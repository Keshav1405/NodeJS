const express = require('express');
const PORT = 5000;

const app = express();

const firstMiddleware = (req,res,next) => {
    console.log("Here we are executing first middleware function")
    next()
}

const secondMiddleware = (req,res,next) => {
    console.log("This will invoke with about and contact")
    next()
}

app.use(firstMiddleware);

app.get('/', function(req,res){
    res.status(200).send(
        `<h1>What is express?</h1>
        <hr>
        <p>Express is a fast, unopinionated, minimalist web framework for Node.js</p>
    `)
})

app.get('/about', secondMiddleware , function(req,res){
    res.status(200).send(
        `<h1>This is the about page</h1>
        <hr>
    `)
});

app.get('/contact', secondMiddleware, function(req,res){
    res.status(200).send(
        `<h1>This is the contact page</h1>
        <hr>
    `)
});

app.listen(PORT, ()=>{
    console.log(`app is listening at http://localhost:${PORT}`)
})