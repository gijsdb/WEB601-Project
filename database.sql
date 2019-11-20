DROP DATABASE web601_project;
CREATE DATABASE web601_project;

use web601_project;

-- All the create table statements
DROP TABLE IF EXISTS tblUsers;
CREATE TABLE tblUsers (
	ID int auto_increment PRIMARY KEY,
	Email varchar(50),
    `Password` varchar(50)
);

DROP TABLE IF EXISTS tblBooks;
CREATE TABLE tblBooks (
	ID int auto_increment PRIMARY KEY,
	Title varchar(50),
	Author varchar(50),
    DateRead date,
    UserID int,
    FOREIGN KEY (UserID) REFERENCES tblUsers(ID)
);

DROP TABLE IF EXISTS tblNotes;
CREATE TABLE tblNotes (
	ID int auto_increment PRIMARY KEY,
	Title varchar(50),
	Content varchar(1000),
    BookID int,
    FOREIGN KEY (BookID) REFERENCES tblBooks(ID)
);

-- Initial test data
INSERT INTO tblUsers(Email, `Password`)
VALUES('test@test.com', 'test123');
SELECT * FROM tblUsers;

SELECT * FROM tblBooks;

INSERT INTO tblNotes(Title, Content, BookID)
VALUES('Test Note', 'I like this book', 1),('Test Note2', 'I like this book2', 1),('Test Note3', 'I like this book2', 1),('Test Note4', 'I like this book2', 3);
SELECT * FROM tblNotes;