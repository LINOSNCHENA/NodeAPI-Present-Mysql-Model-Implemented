--- ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'Monze2019@';
use presly;
DROP TABLE IF EXISTS bank1 ;
CREATE TABLE bank1 (
id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
name VARCHAR(50) NOT NULL,
dept VARCHAR(50) NOT NULL,
post VARCHAR(50),salary int,
status VARCHAR(50) default "Temporal",
createdat TIMESTAMP DEFAULT CURRENT_TIMESTAMP);
INSERT INTO bank1 ( name, dept,  post, salary )
   VALUES
   ( "Marvin Nikolas", "MATHES","MySQL-BANK-ONE", 21209 ),
   ( "Lumumba Malawi", "Engineering","MySQL-Engineer", 12014 ),
   ( "Lorena Leon", "MATHES","MySQL-BANK-ONE", 12009 ),
   ( "Nikolas Marvin", "Management","MySQL-Director", 12084 );

   DROP TABLE IF EXISTS bank3 ;
CREATE TABLE bank3 (
id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
name VARCHAR(50) NOT NULL,
dept VARCHAR(50) NOT NULL,
post VARCHAR(50),salary int,
status VARCHAR(50) default "Temporal",
createdat TIMESTAMP DEFAULT CURRENT_TIMESTAMP);
INSERT INTO bank3 ( name, dept,  post, salary )
   VALUES
   ( "Marvin Nikolas", "Management","MySQL-BANK-THREE", 21209 ),
   ( "Lumumba Malawi", "SCIENCE","MySQL-Engineer", 12014 ),
   ( "Lorena Leon", "SCIENCE","MySQL-BANK-THREE", 12009 ),
   ( "Nikolas Marvin", "Management","MySQL-Director", 12084 );
   
select * from Bank3, BANK1