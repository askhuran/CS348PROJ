use Degrees;
DROP TABLES IF EXISTS Degrees;
CREATE TABLE Degrees (
    degreeId int,
    name varchar(20),
    department varchar(20)
);

CREATE TABLE Concentrations (
    concentrationId int,
    name varchar(20)
);

CREATE TABLE Students (
    studentId int,
    firstName varchar(20),
    lastName varchar(20),
    degreeId varchar(20),
    concentrationId varchar(20)
);




















DELIMITER //
SET SQL_SAFE_UPDATES = 0;
DROP PROCEDURE IF EXISTS checkStudent;
CREATE PROCEDURE checkStudent(IN id int)
	BEGIN 
		SELECT *
        FROM Students
        WHERE studentId = id;
	END //


DROP PROCEDURE IF EXISTS addDegree;
CREATE PROCEDURE addDegree(sId int, dId int, cId int)
	BEGIN 
		UPDATE Students
		SET degreeId=dId, concentrationId=cId
		WHERE studentId = sId;
	END //
    
DROP PROCEDURE IF EXISTS deleteDegree;
CREATE PROCEDURE deleteDegree(sId int)
	BEGIN 
		UPDATE Students
		SET degreeId=null, concentrationId=null
		WHERE studentId = sId;
	END //
    
DROP PROCEDURE IF EXISTS displayDegrees;
CREATE PROCEDURE displayDegrees(dept varchar(64))
	BEGIN 
		SELECT *
        FROM Degrees
		WHERE department = dept;
	END //
    


DROP PROCEDURE IF EXISTS editDegree;
CREATE PROCEDURE editDegree(cid int, sid int)
	BEGIN 
		UPDATE Students
		SET concentrationId = cid
		WHERE studentId = sid;
	END //
    
CREATE INDEX index_name ON Degrees (department);
    

DELIMITER ;