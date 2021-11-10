DROP TABLE IF EXISTS Orders_Dishes;
DROP TABLE IF EXISTS Orders_Drinks;
DROP TABLE IF EXISTS Dish;
DROP TABLE IF EXISTS Drink;
DROP TABLE IF EXISTS Orders;

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
CREATE TABLE Orders (
    id INT NOT NULL AUTO_INCREMENT,
    customer_name VARCHAR(50) NOT NULL,
    address VARCHAR(100) NOT NULL,
    PRIMARY KEY (id)
);
CREATE TABLE Orders_Dishes (
    dishes_id INT NOT NULL,
    order_id INT NOT NULL,
    FOREIGN KEY (dishes_id)
        REFERENCES Dish(id),
    FOREIGN KEY (order_id)
        REFERENCES Orders(id)
);
CREATE TABLE Orders_Drinks (
    drinks_id INT,
    order_id INT NOT NULL,
    FOREIGN KEY (drinks_id)
        REFERENCES Drink(id),
    FOREIGN KEY (order_id)
        REFERENCES Orders(id)
);