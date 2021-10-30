DELETE FROM Dish;
DELETE FROM Drink;

INSERT INTO Dish
    VALUES(0, 'Spaghetti Alla Marinara', 'Classic tomato spaghetti with basil topped with Parmesan cheese', 'PASTA', 6.0, 'src/main/resources/static/img/food/spaghetti.jpeg' );
INSERT INTO Dish(name, description, dish_type, price, image_path)
    VALUES('Margherita Pizza', 'Tomato sauce, cherry tomatoes, mozzarella cheese, basil', 'PIZZA', 8.0, 'src/main/resources/static/img/food/pizza.jpeg' );
INSERT INTO Dish(name, description, dish_type, price, image_path)
    VALUES('Caprese salad', 'Sliced fresh mozzarella, tomatoes and sweet basil, seasoned with salt and olive oil.', 'SALAD', 3.0, 'src/main/resources/static/img/food/caprese.jpeg' );

INSERT INTO Drink
    VALUES(70,'Aperol Spritz', 'Prosecco, Aperol, soda water, ice', 'COCKTAIL', 4.0, NULL);
INSERT INTO Drink(name, details, drink_type, price, image_path)
    VALUES('Lambrusco', NULL, 'WINE', 6.0, NULL);
INSERT INTO Drink(name, details, drink_type, price, image_path)
    VALUES('Limoncello', NULL, 'LIQUEUR', 3.0, NULL);
INSERT INTO Drink(name, details, drink_type, price, image_path)
    VALUES('Moretti', NULL, 'BEER', 2.5, NULL);
INSERT INTO Drink(name, details, drink_type, price, image_path)
    VALUES('Espresso', NULL, 'COFFEE', 2.0, NULL);
INSERT INTO Drink(name, details, drink_type, price, image_path)
    VALUES('Cappuccino', NULL, 'COFFEE', 2.4, NULL);
INSERT INTO Drink(name, details, drink_type, price, image_path)
    VALUES('Macchiato', NULL, 'COFFEE', 2.4, NULL);
