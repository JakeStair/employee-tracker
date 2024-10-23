import inquirer from 'inquirer';

export const mainMenuPrompt = async () => {
  const { action } = await inquirer.prompt([
    {
      type: 'list',
      name: 'action',
      message: 'What would you like to do?',
      choices: ['View Employees', 'Add Employee', 'Update Employee', 'Delete Employee', 'Exit'],
    }
  ]);
  return { action }; // Return an object with the action
};


// Prompt to gather employee data when adding a new employee
export const employeePrompt = async () => {
  return inquirer.prompt([
    { type: 'input', name: 'first_name', message: 'First Name:' },
    { type: 'input', name: 'last_name', message: 'Last Name:' },
    { type: 'input', name: 'role_id', message: 'Role ID (number):' },
    { type: 'input', name: 'manager_id', message: 'Manager ID (number):' }
  ]);
};

// Prompt for updating an employee
export const updateEmployeePrompt = async () => {
  return inquirer.prompt([
    { type: 'input', name: 'id', message: 'Enter the ID of the employee to update:' },
    { type: 'input', name: 'first_name', message: 'New First Name (leave blank to keep current):' },
    { type: 'input', name: 'last_name', message: 'New Last Name (leave blank to keep current):' },
    { type: 'input', name: 'role_id', message: 'New Role ID (leave blank to keep current):' },
    { type: 'input', name: 'manager_id', message: 'New Manager ID (leave blank to keep current):' }
  ]);
};

// Prompt for deleting an employee
export const deleteEmployeePrompt = async () => {
  return inquirer.prompt([
    { type: 'input', name: 'id', message: 'Enter the ID of the employee to delete:' }
  ]);
};
