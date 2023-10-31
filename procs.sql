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
DELIMITER ;