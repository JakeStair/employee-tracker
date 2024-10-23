import inquirer from 'inquirer';

// Prompt to choose the main action from the main menu
export const mainMenuPrompt = async () => {
  const { action } = await inquirer.prompt([
    {
      type: 'list',
      name: 'action',
      message: 'What would you like to do?',
      choices: ['View Employees', 'Add Employee', 'Update Employee', 'Delete Employee', 'Exit'],
    }
  ]);
  return action; // Return the selected action
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
