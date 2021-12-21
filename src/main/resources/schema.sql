DROP TABLE IF EXISTS Orders_Dishes;
DROP TABLE IF EXISTS Orders_Drinks;
DROP TABLE IF EXISTS Dish;
DROP TABLE IF EXISTS Drink;
DROP TABLE IF EXISTS Orders;
DROP TABLE IF EXISTS Reservation;
DROP TABLE IF EXISTS Seating_Arrangement;

CREATE TABLE Dish (
    id INT NOT NULL AUTO_INCREMENT,
    name VARCHAR(50) NOT NULL,
    description VARCHAR(300),
    dish_type VARCHAR(10) NOT NULL,
    price DOUBLE NOT NULL,
    image_path VARCHAR(100),
    PRIMARY KEY (id)
);
CREATE TABLE Drink (
    id INT NOT NULL AUTO_INCREMENT,
    name VARCHAR(50) NOT NULL,
    details VARCHAR(300),
    drink_type VARCHAR(10) NOT NULL,
    price DOUBLE NOT NULL,
    image_path VARCHAR(100),
    PRIMARY KEY (id)
);
CREATE TABLE Orders (
    id INT NOT NULL AUTO_INCREMENT,
    customer_name VARCHAR(50) NOT NULL,
    address VARCHAR(300) NOT NULL,
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
CREATE TABLE Seating_Arrangement (
    id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    seats_at_table INT NOT NULL,
    available_tables INT NOT NULL,
    UNIQUE(seats_at_table)
);
CREATE TABLE Reservation (
    id INT NOT NULL PRIMARY KEY AUTO_INCREMENT ,
    customer_name VARCHAR(50) NOT NULL,
    date_time DATETIME NOT NULL,
    table_id INT NOT NULL,
    FOREIGN KEY (table_id)
        REFERENCES Seating_Arrangement(id),
    UNIQUE (table_id)
);