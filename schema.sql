CREATE DATABASE biblioteca_games;
USE biblioteca_games;

CREATE TABLE games (
  id integer PRIMARY KEY AUTO_INCREMENT,
  title VARCHAR(45) NOT NULL,
  `desc` VARCHAR(255) NOT NULL,
  cover VARCHAR(255) NULL,
  price integer NOT NULL,
  created TIMESTAMP NOT NULL DEFAULT NOW()
);

INSERT INTO `games` (title, `desc`, cover, price)
VALUES 
('Rocket League','PlayStation 4, Nintendo Switch, GeForce Now, Xbox One, Linux, Microsoft Windows, Mac operating systems','https://cdn2.steamgriddb.com/file/sgdb-cdn/grid/e4e4005042cf598805d581754fe9256f.png',0),
('Grand Theft Auto 5','PlayStation 4, PlayStation 5, PlayStation 3, Xbox 360, Xbox One, Xbox Series X and Series S, Microsoft Windows','https://criticalhits.com.br/wp-content/uploads/2013/04/GTAV-cover.jpg',250),
('Tomb Raider','Microsoft Windows, Xbox 360, PlayStation 3, OS X, PlayStation 4, Xbox One, Linux, Shield TV, Stadia','https://i0.wp.com/i.imgur.com/eOtEAB7.jpg?resize=461%2C650&strip=all',100),
('Red Dead Redemption 2','PlayStation 4, PlayStation 5, Xbox One, Google Stadia, Microsoft Windows','https://cdn.mobygames.com/covers/8361038-red-dead-redemption-ii-windows-front-cover.jpg',200),
('Elden Ring','PlayStation 5, PlayStation 4, Xbox One, Xbox One X, Xbox Series X and Series S, Microsoft Windows','https://m.media-amazon.com/images/I/6110RSDn3PL.jpg',250);
