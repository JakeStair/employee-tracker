import client from '../db/conection'; // Ensure this path is correct and the module exists

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
    return [];
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

// Function to update an existing employee in the Employee table
export const updateEmployee = async (employeeData: Partial<Employee> & { id: number }) => {
  const { id, first_name, last_name, role_id, manager_id } = employeeData;
  const updates = [];
  const values = [];

  if (first_name) {
    updates.push(`first_name = $${updates.length + 1}`);
    values.push(first_name);
  }
  if (last_name) {
    updates.push(`last_name = $${updates.length + 1}`);
    values.push(last_name);
  }
  if (role_id) {
    updates.push(`role_id = $${updates.length + 1}`);
    values.push(role_id);
  }
  if (manager_id) {
    updates.push(`manager_id = $${updates.length + 1}`);
    values.push(manager_id);
  }

  if (updates.length > 0) {
    try {
      await client.query(
        `UPDATE Employee SET ${updates.join(', ')} WHERE id = $${updates.length + 1}`,
        [...values, id]
      );
    } catch (err) {
      console.error('Error updating employee:', err);
    }
  } else {
    console.log('No changes made.');
  }
};

// Function to delete an employee from the Employee table
export const deleteEmployee = async (id: number) => {
  try {
    await client.query('DELETE FROM Employee WHERE id = $1', [id]);
    console.log('Employee deleted successfully!');
  } catch (err) {
    console.error('Error deleting employee:', err);
  }
};
