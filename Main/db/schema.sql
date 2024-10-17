CREATE TABLE Department (
    id SERIAL PRIMARY KEY,
    name VARCHAR(50)
)

CREATE TABLE Role (
    id SERIAL PRIMARY KEY,
    title VARCHAR(30),
    salary DECIMAL NOT NULL,
    description_id INTEGER NOT NULL
)

CREATE TABLE Employee (
    id SERIAL PRIMARY KEY,
    first_name VARCHAR(30),
    last_name VARCHAR(30),
    role_id INTEGER NOT NULL,
    manager_id INTEGER NOT NULL
)