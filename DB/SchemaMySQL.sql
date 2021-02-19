--- ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'Monze2019@';
use presly;

DROP TABLE IF EXISTS `BANK1` ;
CREATE TABLE `BANK1` (
id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
name VARCHAR(50) NOT NULL,
dept VARCHAR(50) NOT NULL,
post VARCHAR(50),salary int,
status VARCHAR(50) default "YES",
createdat TIMESTAMP DEFAULT CURRENT_TIMESTAMP);
INSERT INTO `BANK1` ( name, dept,  post, salary )
   VALUES
   ( "NikolasZ", "ManagerX","MySQL-THREE", 21209 ),
   ( "LorenaZ", "ScienceX","MySQL-Engineer", 12014 ),
   ( "LeonZZZ", "ChemistryX","MySQL-THREE", 12009 ),
   ( "MarvinZ", "ManagerX","MySQL-Director", 12084 );
   
-- Table structure for table `BANK3`
--
DROP table if exists `BANK3`;
CREATE TABLE `BANK3`
(
  `id` serial AUTO_INCREMENT PRIMARY KEY,
  `name` varchar
(70) DEFAULT NULL,
  `town` varchar
(70) DEFAULT NULL,
  `hotel`varchar
(70) DEFAULT NULL,
  `isactive` varchar
(71) DEFAULT NULL,
  `createdat` datetime DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `BANK3`
--

INSERT INTO `BANK3` (`name`,`town`, `hotel`, `isactive`) VALUES
('LorenaZ', 'VasterasX', 'Monze1', 2011),
('LeonZZZ', 'PragueX', 'Choma2', 2012),
('MarvinZ', 'PragueX', 'Maz3', 2013),
('Nikolas', 'AmsterX', 'Kafue4', 2014),
('CathyZZ', 'LusakaX', 'Manda5', 2015);

select * from `BANK1`, `BANK3`;