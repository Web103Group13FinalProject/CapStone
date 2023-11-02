--User Table
CREATE TABLE user(
    id SERIAL Primary KEY,
    username VARCHAR(255) NOT NULL,
    password VARCHAR(255) NOT NULL,
    first_name VARCHAR(255) NOT NULL,
    last_name VARCHAR(255) NOT NULL
);

--Category Table
CREATE TABLE category(
    id SERIAL Primary KEY,
    name VARCHAR(255) NOT NULL,
    time_of_day VARCHAR(255) NOT NULL
);

--Category Table Values
INSERT INTO category (name)
VALUES ('Vegan'),
       ('Vegetarian'),
       ('Pescatarian'),
       ('Keto'),
       ('Paleo'),
       ('Gluten-Free'),
       ('Dairy-Free'),
       ('Dessert'),
       ('Low-Carb'),
       ('Mediterranean'),
       ('Raw-Food');
       


--Post Table
CREATE TABLE post(
    id SERIAL Primary KEY,
    title VARCHAR(255) NOT NULL,
    ingredients TEXT NOT NULL,
    instructions TEXT NOT NULL,
    user_id INTEGER REFERENCES user(id) NOT NULL,
    category_id INTEGER REFERENCES category(id) NOT NULL
);

--Meal_Plan Table
CREATE TABLE meal_plan(
    id SERIAL Primary KEY,
    name VARCHAR(255) NOT NULL,
    category_id INT REFERENCES category(id) NOT NULL,
    contents TEXT NOT NULL,
    user_id INTEGER REFERENCES user(id) NOT NULL
);

