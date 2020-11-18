CREATE TABLE users (
     id INT AUTO_INCREMENT PRIMARY KEY,
     name VARCHAR(255) NOT NULL DEFAULT "Name is empty!",
     lastname VARCHAR(255) NOT NULL DEFAULT "Lastname is empty!",
     user VARCHAR(255) UNIQUE NOT NULL,
     email VARCHAR(255) UNIQUE NOT NULL,
     created_at TIMESTAMP DEFAULT NOW() 
     );