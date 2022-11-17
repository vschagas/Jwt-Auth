DROP SCHEMA IF EXISTS Trybesmith;
CREATE SCHEMA IF NOT EXISTS Trybesmith;

CREATE TABLE Trybesmith.Users (
  id INTEGER AUTO_INCREMENT PRIMARY KEY NOT NULL,
  email TEXT NOT NULL,
  password TEXT NOT NULL
);


INSERT INTO
  Trybesmith.Users (email, password)
VALUES
  ("lewishamilton@gmail.com", "123456");



