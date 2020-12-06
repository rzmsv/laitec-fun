CREATE TABLE users (
     id INT AUTO_INCREMENT PRIMARY KEY,
     name VARCHAR(255) NOT NULL,
     lastname VARCHAR(255) NOT NULL,
     user VARCHAR(255) UNIQUE NOT NULL,
     email VARCHAR(255) UNIQUE NOT NULL,
     password VARCHAR(255) NOT NULL,
     admin VARCHAR(4) DEFAULT 'no' ,
     created_at TIMESTAMP DEFAULT NOW() 
      );

CREATE TABLE admin (
     id INT AUTO_INCREMENT PRIMARY KEY,
     name VARCHAR(255) NOT NULL,
     lastname VARCHAR(255) NOT NULL,
     user VARCHAR(255) UNIQUE NOT NULL,
     email VARCHAR(255) UNIQUE NOT NULL,
     password VARCHAR(255) NOT NULL,
     created_at TIMESTAMP DEFAULT NOW() 
      );



CREATE TABLE get_offers (
     id INT PRIMARY KEY AUTO_INCREMENT,
     user_id INT,
     offers_id INT,
     FOREIGN KEY(user_id) REFERENCES users(id),
     FOREIGN KEY(offers_id) REFERENCES offers(id),
     created_at TIMESTAMP DEFAULT NOW()
      );

CREATE TABLE offers ( 
     id INT PRIMARY KEY AUTO_INCREMENT,
     category VARCHAR(255) NOT NULL,
     main_pic VARCHAR(255) NOT NULL,
     alt_picture VARCHAR(255) NOT NULL,
     name VARCHAR(255) NOT NULL,
     off INT,
     address VARCHAR(255) NOT NULL,
     description VARCHAR(800) NOT NULL,
     first_pic VARCHAR(255) NOT NULL,
     second_pic VARCHAR(255) NOT NULL,
     Third_pic VARCHAR(255) NOT NULL, 
     telephone INT NOT NULL,
     timeout DATE ,
     created_at TIMESTAMP DEFAULT NOW()
      );