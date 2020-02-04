--- ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'xxxxxxx';

use presly; 
DROP TABLE IF EXISTS bank1;

CREATE TABLE bank1 (
id INT AUTO_INCREMENT PRIMARY KEY,         
name VARCHAR (100) NOT NULL,  
dept VARCHAR (100) NOT NULL,
post VARCHAR (100) NOT NULL, 
salary int default 8080 not null,
status VARCHAR (100) DEFAULT "Temporal" not null,
createdt TIMESTAMP DEFAULT CURRENT_TIMESTAMP);

INSERT INTO bank1 ( name, dept, post, salary )
 VALUES
 ("Leon Wendy", "Enginering","Director", 21200 ),   
 ("Lorena Marvin", "Admin","Administrator", 18500 ),
 ("Nikolas Marvin", "Business","Manager", 18500 ),  
 ("Linos Marvin", "PRESIDENT","PembaSoft", 32500 );

select* from bank1