var mysql = require('mysql');

var pool = mysql.createPool({
  connectionLimit: 15,
  host: '127.0.0.1',
  user: 'root',
  password: '',
  database: 'chat'
});

/*
    insert into database
*/
var insert = function(msgObj, type){
  console.log('opening connection');
  pool.query('INSERT INTO users (username) VALUES (?)', [msgObj.username], function(err, rows){
    pool.query('SELECT user_id FROM users WHERE username=?', [msgObj.username], function(err, rows){
      if(err){console.log(err);}
      if(type === 'message'){
        finalSubmit(msgObj, rows[0].user_id);        
      }
    });
  });
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

/*
    retrieve from database
*/
var retrieve = function(response){
  pool.query('SELECT messages.message_text, messages.created_at, messages.roomname, users.username from messages LEFT JOIN users ON users.user_id=messages.username', function(err, rows){
    response.status(200).json({"results": rows});
  });
}


exports.insert = insert;
exports.retrieve = retrieve;
//INSERT INTO messages (message_text, username, roomname, created_at) VALUE ('testmessage', 'testuser1', 'roomname1', UNIX_TIMESTAMP());
