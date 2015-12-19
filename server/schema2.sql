DROP Database chat2;
CREATE DATABASE chat2;

USE chat2;
CREATE TABLE messages(
    message_id INT(11) not null auto_increment primary key,
    message_text text(255),
    username INT(11) not null,
    roomname varchar(20),
    created_at int(11),
    INDEX(username),
    FOREIGN KEY (username) REFERENCES users(user_id)
)ENGINE=INNODB;

CREATE TABLE users(
   user_id INT(11) not null auto_increment primary key,
   username VARCHAR(20) UNIQUE
)ENGINE=INNODB;
