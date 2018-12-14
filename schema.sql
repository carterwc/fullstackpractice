CREATE DATABASE IF NOT EXISTS cowDB;

USE cowDB;

CREATE TABLE cows (
  id int(11) not null auto_increment primary key,
  cowName varchar(25) not null,
  description varchar(125) not null
)