var cluster = require('cluster');  
var crypto = require('crypto');  
var express = require('express');  
var sleep = require('sleep');  
var numCPUs = require('os').cpus().length;

console.log(numCPUs);

if (cluster.isMaster) {  
    for (var i = 0; i < numCPUs; i++) {
        console.log("numCPUs");
        cluster.fork();// Create a worker
    }
} else {

    var app = express();
    console.log("express");
    app.get('/', function (req, res) {
        var randSleep = Math.round(10000 + (Math.random() * 10000));
        sleep.usleep(randSleep);

        var numChars = Math.round(5000 + (Math.random() * 5000));
        var randChars = crypto.randomBytes(numChars).toString('hex');
        res.send(randChars);
    });

    app.listen(6001);
}