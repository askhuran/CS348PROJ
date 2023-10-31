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


Select *
FROM Students
WHERE studentId = 1;
