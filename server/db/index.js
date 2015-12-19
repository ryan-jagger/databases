var mysql = require('mysql');

var pool = mysql.createPool({
  connectionLimit: 15,
  host: '127.0.0.1',
  user: 'root',
  password: '',
  database: 'chat'
});


var testMessage = {
  text:'message text',
  username:'bob10',
  roommname: '4chan'
};


var insert = function(msgObj){
  console.log('opening connection');
  // pool.getConnection(function(err, connection){
  //   if(err){
  //     console.error('there was an error connecting ', err.stack);
  //   }
  //   console.log('connected as id: ', connection.threadId);

  pool.query('INSERT INTO users (username) VALUES (?)', [msgObj.username], function(err, rows){

      pool.query('SELECT user_id FROM users WHERE username=?', [msgObj.username], function(err, rows){
        if(err){console.log(err);}
        console.log(rows);
        finalSubmit(msgObj, rows[0].user_id);
      });

  });

  // connection.end();
  console.log('connection ended');
//'SELECT user_id FROM users WHERE username=?'
};

var finalSubmit = function(msgObj, userid){

  var sql = "INSERT INTO messages(message_text, username, roomname, created_at) VALUE(?, ?, ?, UNIX_TIMESTAMP());";
  sql = mysql.format(sql, [msgObj.text, userid, msgObj.roomname]);
  pool.query(sql, function(err, rows, field){
    if(!err){
      console.log('hey no errror!');
    }else{
      console.log(err);
    }
  });


};


exports.insert = insert;

//INSERT INTO messages (message_text, username, roomname, created_at) VALUE ('testmessage', 'testuser1', 'roomname1', UNIX_TIMESTAMP());
