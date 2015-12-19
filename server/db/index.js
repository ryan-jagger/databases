var mysql = require('mysql');

var connection = mysql.createConnection({
  host: '127.0.0.1',
  user: 'root',
  password: '',
  database: 'chat2'
});


var testMessage = {
  text:'message text',
  username:'bob10',
  roommname: '4chan'
};


var insert = function(msgObj){
  connection.connect(function(err){
    if(err){
      console.error('there was an error connecting ', err.stack);
    }
    console.log('connected as id: ', connection.threadId);
  });
  connection.query("INSERT INTO messages (message_text, username, roomname, created_at)
                      VALUE (??, ??, ?, UNIX_TIMESTAMP())",[msgObj.text, msgObj.username, msgObj.roomname] ,function(err, rows, field){

  })

  connection.end();
  console.log('connection ended');
}



//INSERT INTO messages (message_text, username, roomname, created_at) VALUE ('testmessage', 'testuser1', 'roomname1', UNIX_TIMESTAMP());
