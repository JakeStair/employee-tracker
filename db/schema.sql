-- Drop tables if they already exist
DROP TABLE IF EXISTS Employee CASCADE;
DROP TABLE IF EXISTS Role CASCADE;
DROP TABLE IF EXISTS Department CASCADE;

-- Create Department table
CREATE TABLE Department (
    id SERIAL PRIMARY KEY,
    name VARCHAR(30) UNIQUE NOT NULL  -- Unique constraint to ensure department names are distinct
);

-- Create Role table
CREATE TABLE Role (
    id SERIAL PRIMARY KEY,
    title VARCHAR(30) UNIQUE NOT NULL,  -- Unique constraint to ensure role titles are distinct
    salary DECIMAL NOT NULL,              -- To hold role salary
    department_id INTEGER NOT NULL,       -- To hold reference to department role belongs to
    FOREIGN KEY (department_id) REFERENCES Department(id)  -- Foreign key referencing Department
);

-- Create Employee table
CREATE TABLE Employee (
    id SERIAL PRIMARY KEY,
    first_name VARCHAR(30) NOT NULL,      -- To hold employee first name
    last_name VARCHAR(30) NOT NULL,       -- To hold employee last name
    role_id INTEGER NOT NULL,              -- To hold reference to employee role
    manager_id INTEGER,                    -- To hold reference to another employee (manager)
    FOREIGN KEY (role_id) REFERENCES Role(id),          -- Foreign key referencing Role
    FOREIGN KEY (manager_id) REFERENCES Employee(id) ON DELETE SET NULL  -- Foreign key referencing Employee
);
