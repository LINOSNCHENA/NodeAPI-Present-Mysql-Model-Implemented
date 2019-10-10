---ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'Monze2019@';

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
   ( "Kelvin Mumba", "History","Teacher", 21200 ),
   ( "Leonard Katongo", "Clinic","Nurse", 1980 ),
   ( "Mavelous Maunga", "Butchery Officer","Officer", 1978 ),
   ( "Kristopher Kawewe", "Mining","Business", 1981 );
   
select * from Bank2





