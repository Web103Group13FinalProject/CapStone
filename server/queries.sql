--Category Table
CREATE TABLE category(
    id SERIAL PRIMARY KEY,
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
       ('Other');

--User Table
CREATE TABLE member (
    id SERIAL PRIMARY KEY,
    username VARCHAR(255) NOT NULL,
    password VARCHAR(255) REFERENCES password(id),
    name VARCHAR(255) NOT NULL,
    category_id INTEGER REFERENCES category(id) -- one to many
);

--Post Table
CREATE TABLE post (
    id SERIAL PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    ingredients TEXT NOT NULL,
    instructions TEXT NOT NULL,
    image TEXT NOT NULL,
    member_id INTEGER REFERENCES member(id),    -- many to many
    category_id INTEGER REFERENCES category(id) -- one to many, many to many
);

-- Password Table
CREATE TABLE password (
    id SERIAL PRIMARY KEY,
    password VARCHAR(255) NOT NULL
);