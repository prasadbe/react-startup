var http = require('http');
var express = require('express');
//var ejs = require('ejs');
var app = express();
app.use(express.static(__dirname + '/public'));
app.set('views', __dirname + '/views');
app.engine('html', require('ejs').renderFile);
//app.set('view engine', 'ejs');
app.get('/',function(req,res){
    res.render('index.html',[]);
});
http.createServer(app).listen(8010);