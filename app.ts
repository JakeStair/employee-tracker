import { mainMenuPrompt, employeePrompt } from './utils/prompt';
import { viewEmployees, addEmployee } from './queries/employeeQueries';

const mainMenu = async () => {
  try {
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
        console.log('Employee added successfully!');
        break;

      case 'Exit':
        console.log('Goodbye!');
        process.exit();

      default:
        console.log('Invalid action.');
    }
  } catch (error) {
    console.error('An error occurred:', error);
  }

  // Recursive call to keep the menu running after each action
  await mainMenu(); // Use await to ensure the next prompt waits for the previous one to complete
};

// Start the application
mainMenu();
