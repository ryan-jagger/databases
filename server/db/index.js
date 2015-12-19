var mysql = require('mysql');

var connection = mysql.createConnection({
  host: '127.0.0.1',
  user: 'root',
  password: ''
});

connection.connect(function(err){
  if(err){
    console.error('there was an error connecting ', err.stack);
  }
  console.log('connected as id: ', connection.threadId);
});
