import client from '../db/conection'; // Ensure this path is correct and the module exists
// the above import is important to this file because it allows us to use the client object to interact with the database
interface Employee {
  first_name: string;
  last_name: string;
  role_id: number;
  manager_id: number;
}

// Function to view all employees from the Employee table
export const viewEmployees = async () => {
  try {
    const res = await client.query('SELECT * FROM Employee');
    return res.rows;
  } catch (err) {
    console.error('Error fetching employees:', err);
  }
};

// Function to add a new employee to the Employee table
export const addEmployee = async (employeeData: Employee) => {
  const { first_name, last_name, role_id, manager_id } = employeeData;
  try {
    await client.query(
      'INSERT INTO Employee (first_name, last_name, role_id, manager_id) VALUES ($1, $2, $3, $4)',
      [first_name, last_name, role_id, manager_id]
    );
    console.log('Employee added successfully!');
  } catch (err) {
    console.error('Error adding employee:', err);
  }
};
