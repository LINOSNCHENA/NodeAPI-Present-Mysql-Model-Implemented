---MySQL dataBase Aganist MSSQL
---ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'Monze2019@';

DROP TABLE IF EXISTS `presly`.`bank2` ;
CREATE TABLE `presly`.`bank2` (
id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
names VARCHAR(50) NOT NULL,
dept VARCHAR(50) NOT NULL,
post VARCHAR(50),
salary int,
status VARCHAR(50) default "Temporal",
created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO presly.bank2 ( names,dept,post,salary )
   VALUES
   ( "Leon", "Nchena","Director", 21200 ),
   ( "Lorena nchena", "Engineer","post", 8500 ),
     ( "Nikolas nchena", "Engineer","post", 8500 ),
   ( "LINOSNCHENA", "cmis","Lecturer", 13500 );


