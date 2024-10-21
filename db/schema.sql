-- Drop tables if they already exist
DROP TABLE IF EXISTS Employee CASCADE;
DROP TABLE IF EXISTS Role CASCADE;
DROP TABLE IF EXISTS Department CASCADE;

-- Create Role table
CREATE TABLE Role (
    id SERIAL PRIMARY KEY,
    title VARCHAR(50) NOT NULL
);

-- Create Employee table
CREATE TABLE Employee (
    id SERIAL PRIMARY KEY,
    first_name VARCHAR(30) NOT NULL,
    last_name VARCHAR(30) NOT NULL,
    role_id INTEGER NOT NULL,
    manager_id INTEGER,
    FOREIGN KEY (role_id) REFERENCES Role(id),
    FOREIGN KEY (manager_id) REFERENCES Employee(id) ON DELETE SET NULL
);

-- Create Department table (optional)
CREATE TABLE Department (
    id SERIAL PRIMARY KEY,
    name VARCHAR(50) NOT NULL
);
