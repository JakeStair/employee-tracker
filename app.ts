const inquirer = require('inquirer');

function mainMenu() {
  inquirer.prompt([
    {
      type: 'list',
      name: 'action',
      message: 'What would you like to do?',
      choices: ['View Employees', 'Add Employee', 'Update Employee', 'Delete Employee', 'Exit']
    }
  ]).then(answer => {
    switch (answer.action) {
      case 'View Employees':
        viewEmployees();
        break;
      case 'Add Employee':
        addEmployee();
        break;
      // Handle other cases...
    }
  });
}

const { Client } = require('pg');
require('dotenv').config();

const client = new Client({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASS,
  port: process.env.DB_PORT,
});

client.connect();
