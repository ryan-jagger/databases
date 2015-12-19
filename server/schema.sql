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

-- ALTER TABLE `messages` ADD

-- ALTER TABLE `messages` ADD CONSTRAINT `messages_fk1`
