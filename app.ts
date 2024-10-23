import { mainMenuPrompt, employeePrompt, updateEmployeePrompt, deleteEmployeePrompt } from './utils/prompt';
import { viewEmployees, addEmployee, updateEmployee, deleteEmployee } from './queries/employeeQueries';

const mainMenu = async () => {
  try {
    const response = await mainMenuPrompt();
    console.log('Response:', response); // Log the entire response object
    const { action } = response; // Destructure action

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

      case 'Update Employee':
        const employeeUpdateData = await updateEmployeePrompt();
        await updateEmployee(employeeUpdateData);
        console.log('Employee updated successfully!');
        break;

      case 'Delete Employee':
        const employeeDeleteData = await deleteEmployeePrompt();
        await deleteEmployee(employeeDeleteData.id);
        console.log('Employee deleted successfully!');
        break;

      case 'Exit':
        console.log('Goodbye!');
        process.exit();

      default:
        console.log('Invalid action:', action); // Log invalid action
    }
  } catch (error) {
    if (error instanceof Error) {
      console.error('An error occurred:', error.message); // Enhanced error logging
    } else {
      console.error('An unknown error occurred:', error);
    }
    if (error instanceof Error) {
      console.error(error.stack); // Log stack trace
    }
  }

  await mainMenu();
};



// Start the application
mainMenu();
