--- ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'Monze2019@';

use presly;
DROP TABLE IF EXISTS bank2 ;

CREATE TABLE bank2 (
id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
name VARCHAR(50) NOT NULL,
dept VARCHAR(50) NOT NULL,
post VARCHAR(50),salary int,
status VARCHAR(50) default "Temporal",
createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP);

INSERT INTO bank2 ( name, dept,  post, salary )
   VALUES
   ( "Marvin Nikolas", "History","Teacher", 21209 ),
   ( "Leon Marvin", "Clinic","Nurse", 12014 ),
   ( "Lorena Leon", "Butchery Officer","Officer", 12009 ),
   ( "Nikolas Marvin", "Mining","Business", 12084 );
   
select * from Bank2





