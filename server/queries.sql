--User Table
CREATE TABLE member (
    id SERIAL PRIMARY KEY,
    username VARCHAR(255) NOT NULL,
    password VARCHAR(255) NOT NULL,
    first_name VARCHAR(255) NOT NULL,
    last_name VARCHAR(255) NOT NULL
);


--Category Table
CREATE TABLE category(
    id SERIAL Primary KEY,
    name VARCHAR(255) NOT NULL
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
       ('Raw-Food'),
       ('None of the Above');
       


--Post Table
CREATE TABLE post (
    id SERIAL PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    ingredients TEXT NOT NULL,
    instructions TEXT NOT NULL,
    member_id INTEGER REFERENCES member(id) NOT NULL
);


--JOIN table for Post and Category
CREATE TABLE post_category (
    post_id INTEGER REFERENCES post(id) NOT NULL,
    category_id INTEGER REFERENCES category(id) NOT NULL,
    PRIMARY KEY (post_id, category_id)
);

--Meal_Plan Table
CREATE TABLE meal_plan(
    id SERIAL Primary KEY,
    name VARCHAR(255) NOT NULL,
    category_id INT REFERENCES category(id) NOT NULL,
    contents TEXT NOT NULL,
    member_id INTEGER REFERENCES member(id) NOT NULL
);

