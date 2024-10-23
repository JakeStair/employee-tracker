# Employee Tracker

## Overview

Employee Tracker is a powerful command-line tool crafted to assist business owners in efficiently managing their employee databases. Leveraging the capabilities of Node.js, Inquirer, and PostgreSQL, this application empowers users to seamlessly view and oversee departments, roles, and employee information, enhancing organizational efficiency and strategic planning.

## User Story

- **As a business owner**, I want to be able to view and manage the departments, roles, and employees in my company so that I can organize and plan my business.

## Acceptance Criteria

The application meets the following acceptance criteria:
- **Start the Application**: When the application starts, users are presented with options to:
  - View all departments
  - View all roles
  - View all employees
  - Add a department
  - Add a role
  - Add an employee
  - Update an employee's role
- **View All Departments**: When users choose to view all departments, they see a formatted table displaying department names and IDs.
- **View All Roles**: When users choose to view all roles, they see a table with job titles, role IDs, the corresponding department, and the salary for each role.
- **View All Employees**: When users choose to view all employees, they see a formatted table showing employee data, including IDs, first names, last names, job titles, departments, salaries, and managers.
- **Add a Department**: When users choose to add a department, they are prompted to enter the department name, which is then added to the database.
- **Add a Role**: When users choose to add a role, they are prompted to enter the name, salary, and department for the role, which is then added to the database.
- **Add an Employee**: When users choose to add an employee, they are prompted to enter the employee's first name, last name, role, and manager, which are then added to the database.
- **Update an Employee Role**: When users choose to update an employee's role, they are prompted to select an employee and their new role, which is then updated in the database.
## Technologies Used
- **Node.js**: JavaScript runtime for building server-side applications.
- **Inquirer**: A library for building interactive command-line user interfaces.
- **PostgreSQL**: Relational database management system for storing employee data.
## Walkthrough Video
For a demonstration of the application's features, you can watch the walkthrough video below:

[![Watch the video](./img/thumbnail.jpg)](https://drive.google.com/file/d/1EaNlNM0RAdZJbI9Eo3XUpiq22FoBqo6j/view?usp=drive_link)


## Installation
Make sure you have the following installed:
- [Node.js](https://nodejs.org/en/download/) (version X.X.X or higher)
- [PostgreSQL](https://www.postgresql.org/download/) (version X.X.X or higher)
Install Dependencies
-npm install
Set up Enviroment Variables (.env)
-DB_USER=your_database_username
-DB_HOST=localhost
-DB_NAME=your_database_name
-DB_PASS=your_database_password
-DB_PORT=5432
## Usage
```bash
npm start
```
Clone the Repository
```bash
-git clone git@github.com:JakeStair/employee-tracker.git
cd work-it-out
```
Set up the Environment Variables
```
DB_USER=your_database_username
DB_HOST=localhost
DB_NAME=your_database_name
DB_PASS=your_database_password
DB_PORT=5432
```

## Contibuting
Contributions are welcome! If you would like to contribute, please follow these steps:
- Fork the repository.
- Create a new branch (git checkout -b feature/YourFeature).
- Make your changes and commit them (git commit -m 'Add some feature').
- Push to the branch (git push origin feature/YourFeature).
- Open a pull request.
## License
This project is licensed under the MIT License. See the LICENSE file for details.
## Acknowledgements
Inquirer.js - For creating interactive command-line interfaces.

pg - For PostgreSQL database interactions.


Special Thanks

I would like to express my heartfelt appreciation to Martha Watson and Nick S. for their tremendous support during this project. Their guidance and expertise in troubleshooting and problem-solving have been invaluable and made a significant impact on my work.
## Contact
- For questions or inquiries, please contact:
- Jake Watson: jacob.watson00@yahoo.com
- GitHub - https://github.com/JakeStair
- nodejs.orgnodejs.org
- Node.js — Download Node.js®
- Node.js® is a JavaScript runtime built on Chrome's V8 JavaScript engine.