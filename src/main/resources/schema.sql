DROP TABLE IF EXISTS Dish;
DROP TABLE IF EXISTS Drink;

CREATE TABLE Dish (
    id INT NOT NULL AUTO_INCREMENT,
    name VARCHAR(50) NOT NULL,
    description VARCHAR(100),
    dish_type VARCHAR(10) NOT NULL,
    price DOUBLE NOT NULL,
    image_path VARCHAR(100),
    PRIMARY KEY (id)
);
CREATE TABLE Drink (
    id INT NOT NULL AUTO_INCREMENT,
    name VARCHAR(50) NOT NULL,
    details VARCHAR(100),
    drink_type VARCHAR(10) NOT NULL,
    price DOUBLE NOT NULL,
    image_path VARCHAR(100),
    PRIMARY KEY (id)
);