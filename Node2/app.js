const express = require('express');
const PORT = 5000;

const app = express();

app.get('/api/main', function(req,res){
    res.send(
        `<h1>What is express?</h1>
        <hr>
        <p>Express is a fast, unopinionated, minimalist web framework for Node.js</p>
    `)
})

app.listen(PORT, ()=>{
    console.log(`app is listening at http://localhost:${PORT}`)
})