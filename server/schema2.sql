DROP Database chat2;
CREATE DATABASE chat2;

USE chat2;
CREATE TABLE messages(
    message_id INT(11) not null auto_increment primary key,
    message_text text(255),
    username varchar(20),
    roomname varchar(20),
    created_at int(11)
);
