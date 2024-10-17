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
