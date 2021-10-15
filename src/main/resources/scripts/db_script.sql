DROP TABLE IF EXISTS Dish;

CREATE TABLE Dish (
    id INT NOT NULL,
    name VARCHAR(20) NOT NULL,
    description VARCHAR(100),
    dish_type VARCHAR(10) NOT NULL,
    price DOUBLE NOT NULL,
    image_path VARCHAR(100),
    PRIMARY KEY (id)
);