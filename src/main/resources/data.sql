DELETE FROM Dish;

INSERT INTO Dish
    VALUES(0, 'Spaghetti Alla Marinara', 'Classic tomato spaghetti with basil topped with Parmesan cheese', 'PASTA', 6.0, 'src/main/resources/static/img/food/spaghetti.jpeg' );

INSERT INTO Dish(name, description, dish_type, price, image_path)
    VALUES('Margherita Pizza', 'Tomato sauce, cherry tomatoes, mozzarella cheese, basil', 'PIZZA', 8.0, 'src/main/resources/static/img/food/pizza.jpeg' );

INSERT INTO Dish(name, description, dish_type, price, image_path)
    VALUES('Caprese salad', 'Sliced fresh mozzarella, tomatoes and sweet basil, seasoned with salt and olive oil.', 'SALAD', 3.0, 'src/main/resources/static/img/food/caprese.jpeg' );