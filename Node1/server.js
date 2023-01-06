const http = require('http');

http.createServer(function(req,res){
    res.write('<h1>What is Node?</h1>');

    const details = {
        Definition: "Node is a JS runtime environment through which we can run JS in our machine",
        Use: "It is used to create the backend or server-side appliccations"
    }
    const jsonContent = JSON.stringify(details)

    res.end(jsonContent);
}).listen(5000);