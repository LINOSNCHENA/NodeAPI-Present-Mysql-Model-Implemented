
DROP TABLE IF EXISTS bank3;
CREATE TABLE bank3
(
    id serial  PRIMARY KEY,
    name VARCHAR  (50) NOT NULL,
    dept VARCHAR    (50) NOT NULL,
    post VARCHAR  (50),
    salary int NOT NULL default '1947',
    status varchar(255) NOT NULL DEFAULT 'FIRST',
    createdat TIMESTAMP DEFAULT CURRENT_TIMESTAMP);

    INSERT INTO bank3
        ( name, dept, post, salary )
    VALUES
        ( 'Marvin Nikolas', 'Management', 'MySQL-Teacher', 21209 ),
        ( 'Lumumba Malawi', 'Engineering', 'MySQL-Engineer', 12014 ),
        ( 'Lorena Leon', 'Human Resource', 'MySQL-Executive', 12009 ),
        ( 'Nikolas Marvin', 'Management', 'MySQL-Director', 12084 );

select* from bank3