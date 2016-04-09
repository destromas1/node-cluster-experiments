// var sticky = require('socketio-sticky-session');

// sticky(require('http').createServer(function(req, res) {
//     res.write("aaaa");
//   res.end();
// })).listen(3000, function() {
//   console.log('server started on 3000 port');
// });

var sticky = require('socketio-sticky-session');
var express = require('express');
var crypto = require('crypto');
var sleep = require('sleep');
var app = express();

app.set('port', 6001);

app.get('/aaa', function(req, res) {
    console.log("asssssssssssssssssssssssss");
    // var randSleep = Math.round(10000 + (Math.random() * 10000));
    // sleep.usleep(randSleep);

    // var numChars = Math.round(5000 + (Math.random() * 5000));
    // var randChars = crypto.randomBytes(numChars).toString('hex');
    res.send({ randChars: true });
});

var options = {
    proxy: true, //activate layer 4 patching 
    header: 'x-forwarded-for', //provide here your header containing the users ip 
    num: require('os').cpus().length //count of processes to create, defaults to maximum if omitted 
}


sticky(options, function() {
    var server = require('http').createServer(app);

    var io = require('socket.io').listen(server);

    app.set('socketio', io);

    return server;
}).listen(app.get('port'), function() {
    console.log('server started on 3000 port');
});


// server.listen(app.get('port'), function () {
//   console.log('httpServer listening on port %d', app.get('port'));
// });



// if (!sticky.listen(server, app.get('port'))) {
//   // Master code
//   server.once('listening', function() {
//     console.log('httpServer listening on port %d', app.get('port'));
//   });
// } else {
//   // Worker code
// }