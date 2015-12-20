var http = require("http");
var express = require('express');
var bodyParser = require("body-parser");
var app = express();
var db = require('./db/index.js');

var storage = [];

app.use(express.static(__dirname + "/client"));
app.use(bodyParser.json());

app.get(/classes/, function(request, response){
//  var results;
  db.retrieve(response);
});

app.post(/classes/, function(request, response) {
  db.insert(request.body);
  response.status(201).json( {'results': storage} );
});

var server = app.listen(3000, function(){

});
