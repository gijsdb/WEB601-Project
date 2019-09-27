DROP DATABASE web601_project;
CREATE DATABASE web601_project;

use web601_project;


DROP TABLE IF EXISTS tblUsers;
CREATE TABLE tblUsers (
	ID int(10) auto_increment PRIMARY KEY,
	Email varchar(50),
    `Password` varchar(50)
);

DROP TABLE IF EXISTS tblBooks;
CREATE TABLE tblBooks (
	ID int(10) auto_increment PRIMARY KEY,
	Title varchar(50),
	Author varchar(50),
    DateRead date,
    UserID int,
    FOREIGN KEY (UserID) REFERENCES tblUsers(ID)
);

DROP TABLE IF EXISTS tblNotes;
CREATE TABLE tblNotes (
	ID int(10) auto_increment PRIMARY KEY,
	Title varchar(50),
	Content varchar(1000),
    BookID int,
    FOREIGN KEY (BookID) REFERENCES tblBooks(ID)
);

INSERT INTO tblUsers(Email, `Password`)
VALUES('test@test.com', 'test123');
SELECT * FROM tblUsers;

INSERT INTO tblBooks(Title, Author, DateRead, UserID)
VALUES('Test Book', 'Test author', '1997-6-04',1);
SELECT * FROM tblBooks;

INSERT INTO tblNotes(Title, Content, BookID)
VALUES('Test Note', 'I like this book', 1);
SELECT * FROM tblNotes;