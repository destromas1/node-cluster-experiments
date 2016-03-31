// var sticky = require('sticky-session');
 
// var server = require('http').createServer(function(req, res) {
//   res.end('worker: ' + process.env.NODE_WORKER_ID);
// });
 
// if (!sticky.listen(server, 3000)) {
//   // Master code 
//   server.once('listening', function() {
//     console.log('server started on 3000 port');
//   });
// } else {
//   // Master code 
// }


var sticky = require('sticky-session');
var express = require('express');
var crypto = require('crypto');
var sleep = require('sleep');
var app = express();

app.set('port', 6001);

app.get('/', function (req, res) {
        var randSleep = Math.round(10000 + (Math.random() * 10000));
        sleep.usleep(randSleep);

        var numChars = Math.round(5000 + (Math.random() * 5000));
        var randChars = crypto.randomBytes(numChars).toString('hex');
        res.send(randChars);
});

var server = require('http').createServer(app);

if (sticky.listen(server, app.get('port'))) {
    console.log("assssss");
        return;
}

console.log("assssss111111111");

server.once('listening', function() {
        console.log("assssss3333333333333");
        console.log('httpServer listening on port %d', app.get('port'));
});




// if (sticky.listen(server, app.get('port'))) {
//     console.log("assssss");
//         return;
// }

// console.log("assssss111111111");

// server.once('listening', function() {
//         console.log("assssss3333333333333");
//         console.log('httpServer listening on port %d', app.get('port'));
// });










// if (!sticky.listen(server, app.get('port'))) {
//   // Master code
//   server.once('listening', function() {
//     console.log('httpServer listening on port %d', app.get('port'));
//   });
// } else {
//   // Worker code
// }







// server.listen(app.get('port'), function() {
//         console.log("assssss3333333333333");
//         console.log('httpServer listening on port %d', app.get('port'));
//     });


// if (!sticky.listen(server, app.get('port'))) {
//     // Master code 
//     server.once('listening', function() {
//         console.log('server started on 3000 port');
//     });
// } else {
//     // Master code
//     server.listen(app.get('port'), function() {
//         console.log('httpServer listening on port %d', app.get('port'));
//     });
// }



// server.listen(app.get('port'), function () {
//   console.log('httpServer listening on port %d', app.get('port'));
// });
 


// server.listen(6001, function () {
//   console.log('httpServer listening on port %d', app.get('port'));
// });

 
// if (!sticky.listen(server, 6001)) {
//   // Master code 
//   server.once('listening', function() {
//     console.log('server started on 3000 port');
//   });
// } else {
//   // Master code 
// var app = express();
//     console.log("express");
//     app.get('/', function (req, res) {
//         var randSleep = Math.round(10000 + (Math.random() * 10000));
//         sleep.usleep(randSleep);

//         var numChars = Math.round(5000 + (Math.random() * 5000));
//         var randChars = crypto.randomBytes(numChars).toString('hex');
//         res.send(randChars);
//     });

//     app.listen(6001);
// }



// var cluster = require('cluster');  
// var crypto = require('crypto');  
// var express = require('express');  
// var sleep = require('sleep');  
// var numCPUs = require('os').cpus().length;

// console.log(numCPUs);

// if (cluster.isMaster) {  
//     for (var i = 0; i < numCPUs; i++) {
//         console.log("numCPUs");
//         cluster.fork();// Create a worker
//     }
// } else {

//     var app = express();
//     console.log("express");
//     app.get('/', function (req, res) {
//         var randSleep = Math.round(10000 + (Math.random() * 10000));
//         sleep.usleep(randSleep);

//         var numChars = Math.round(5000 + (Math.random() * 5000));
//         var randChars = crypto.randomBytes(numChars).toString('hex');
//         res.send(randChars);
//     });

//     app.listen(6001);
// }








// var express         = require('express'),
//     http            = require('http'),
//     //socket          = require('socket.io'),
//     sticky          = require('sticky-session'),
//     APP_PORT        = 6001;

// //Create a new instance

// console.log(sticky);

// var ServerApp = express(),
//     HttpServer = http.createServer(ServerApp);
//     //io                  = socket(HttpServer);

// sticky(HttpServer).listen(APP_PORT, function()
// {
//     console.log('Server listening at port %d', APP_PORT);
// });
// ServerApp.use(express.static(__dirname + '/public/'));

// var express = require('express')();
// var sticky = require('sticky-session');
// var server = require('http').createServer(express);
// var io = require ('socket.io').listen(server);

// sticky(server).listen(6001, function() {
//   console.log('server started on 3000 port');
// });

// express.get('/', function (req, res) {
//    console.log ('request')
// });

// io.on('connection', function (socket) {
//    console.log ('socket')
// }); 

