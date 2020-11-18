CREATE TABLE users (
     id INT AUTO_INCREMENT PRIMARY KEY,
     name VARCHAR(255) NOT NULL DEFAULT "Name is empty!",
     lastname VARCHAR(255) NOT NULL DEFAULT "Lastname is empty!",
     user VARCHAR(255) UNIQUE NOT NULL,
     email VARCHAR(255) UNIQUE NOT NULL,
     created_at TIMESTAMP DEFAULT NOW() 
      );


CREATE TABLE offers (
     id INT AUTO_INCREMENT,
     category VARCHAR(255) NOT NULL,
     name VARCHAR(255) NOT NULL,
     description VARCHAR(255) NOT NULL,
     telephone INT NOT NULL,
     image VARCHAR(255) NOT NULL,
     address VARCHAR(255) NOT NULL,
     off DECIMAL(3,1),
     created_at TIMESTAMP DEFAULT NOW(),
     PRIMARY KEY (id) 
      );


CREATE TABLE get_offers (
     id INT PRIMARY KEY AUTO_INCREMENT,
     user_id INT, offers_id INT,
     FOREIGN KEY(user_id) REFERENCES users(id),
     FOREIGN KEY(offers_id) REFERENCES offers(id),
     created_at TIMESTAMP DEFAULT NOW()
      );