--- ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'Monze2019@';

use presly;
DROP TABLE IF EXISTS bank3 ;

CREATE TABLE bank3 (
id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
name VARCHAR(50) NOT NULL,
dept VARCHAR(50) NOT NULL,
post VARCHAR(50),
salary int,
status VARCHAR(50) default "Temporal",
createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP););

INSERT INTO bank3 ( name, dept,  post, salary )
   VALUES
   ( "Marvin Nikolas", "Management","Teacher", 21209 ),
   ( "Leon Malawi", "Engineering"," Engineer", 12014 ),
   ( "Lorena Leon", "Human Resource","Executive", 12009 ),
   ( "Nikolas Marvin", "Management","Director", 12084 );
   
select * from Bank3