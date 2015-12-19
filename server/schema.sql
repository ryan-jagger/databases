DROP Database chat;
CREATE DATABASE chat;

USE chat;

CREATE TABLE users (
  user_id INT(11) NOT NULL AUTO_INCREMENT,
  username varchar(20) NOT NULL,
  PRIMARY KEY (user_id)
)ENGINE=INNODB;

-- CREATE TABLE rooms (
--   r_id INT(11) NOT NULL AUTO_INCREMENT,
--   roomname varchar(20) NOT NULL,
--   PRIMARY KEY (r_id)
-- )ENGINE=INNODB;

CREATE TABLE messages (
  message_id INT(11) NOT NULL AUTO_INCREMENT,
  message_text TEXT(255) NOT NULL,
  created_at INT(11) NOT NULL,
  roomname VARCHAR(20),
  username INT(11) NOT NULL,
  PRIMARY KEY (message_id),
  INDEX(username),
  -- FOREIGN KEY (roomname) REFERENCES rooms(r_id),
  FOREIGN KEY (username) REFERENCES users(user_id)
)ENGINE=INNODB;
