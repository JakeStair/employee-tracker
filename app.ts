import { mainMenuPrompt, employeePrompt } from './utils/prompt';
import { viewEmployees, addEmployee } from './queries/employeeQueries';

const mainMenu = async () => {
  const { action } = await mainMenuPrompt();

  switch (action) {
    case 'View Employees':
      const employees = await viewEmployees();
      if (employees && employees.length > 0) {
        console.table(employees);
      } else {
        console.log('No employees found.');
      }
      break;

    case 'Add Employee':
      const employeeData = await employeePrompt();
      await addEmployee(employeeData);
      break;

    case 'Exit':
      process.exit();

    default:
      console.log('Invalid action.');
  }

  // Recursive call to keep the menu running after each action
  mainMenu();
};

// Start the application
mainMenu();
