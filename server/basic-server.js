var http = require("http");
var express = require('express');
var bodyParser = require("body-parser");
var app = express();

var storage = [];

app.use(express.static(__dirname + "/client"));
app.use(bodyParser.json());

app.get(/classes/, function(request, response){
  response.status(200).json({'results': storage});
});

app.post(/classes/, function(request, response) {
  storage.push(request.body);
  console.log(request.body);
  response.status(201).json( {'results': storage} );
});

var server = app.listen(3000, function(){

});
