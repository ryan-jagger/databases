-- DROP Database chat;
CREATE DATABASE chat;

USE chat;

CREATE TABLE users (
  u_id INT(11) NOT NULL AUTO_INCREMENT,
  username varchar(20) NOT NULL,
  PRIMARY KEY (u_id)
)ENGINE=INNODB;

CREATE TABLE rooms (
  r_id INT(11) NOT NULL AUTO_INCREMENT,
  roomname varchar(20) NOT NULL,
  PRIMARY KEY (r_id)
)ENGINE=INNODB;

CREATE TABLE messages (
  m_id INT(11) NOT NULL AUTO_INCREMENT,
  text TEXT(255) NOT NULL,
  created_at DATETIME(6) NOT NULL,
  roomname INT(11) NOT NULL,
  username INT(11) NOT NULL,
  PRIMARY KEY (m_id),
  INDEX(roomname),
  INDEX(username),
  FOREIGN KEY (roomname) REFERENCES rooms(r_id),
  FOREIGN KEY (username) REFERENCES users(u_id)
)ENGINE=INNODB;

"insert into messages(username, roomname, text, created_at) 
  values(
    (if not exists( select from users(username) where username='tyler' ) 
      begin 
        insert into users(username) values('tyler');
        select from users(u_id) where username='tyler';
    else 
      begin
        select from users(u_id) where username='tyler';),
    (if not exists( select from room(r_id) where roomname='someRoom')
      begin
        insert into rooms(roomname) values ('someRoom');
        select from rooms(r_id) where roomname='someRoom';
      else
        begin
          select from rooms(r_id) where roomname='someRoom';),
    'this is a message', UNIX_TIMESTAMP());"
