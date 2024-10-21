// src/cli/MainMenu.ts
import inquirer from 'inquirer';
import { EmployeeService } from '../service/EmployeeService';
import { Employee } from '../models/Employee';

const employeeService = new EmployeeService();

export async function EmployeeController(): Promise<void> {
  const { action } = await inquirer.prompt([
    {
      type: 'list',
      name: 'action',
      message: 'What would you like to do?',
      choices: ['Add Employee', 'List Employees', 'Remove Employee', 'Exit'],
    },
  ]);

  switch (action) {
    case 'Add Employee':
      await addEmployee();
      break;
    case 'List Employees':
      employeeService.listEmployees();
      break;
    case 'Remove Employee':
      await removeEmployee();
      break;
    case 'Exit':
      console.log('Goodbye!');
      return;
  }

  await EmployeeController(); // Recursively call the main menu for continuous interaction
}

// Prompt to add a new employee
async function addEmployee(): Promise<void> {
  const employee: Employee = await inquirer.prompt([
    {
      type: 'input',
      name: 'emp_id',
      message: 'Enter Employee ID:',
      validate: (input) => (!isNaN(parseInt(input)) ? true : 'Please enter a valid number.'),
      filter: (input) => parseInt(input),
    },
    {
      type: 'input',
      name: 'emp_name',
      message: 'Enter Employee Name:',
      validate: (input) => (input.trim() !== '' ? true : 'Employee name cannot be empty.'),
    },
    {
      type: 'input',
      name: 'emp_designation',
      message: 'Enter Employee Designation:',
    },
    {
      type: 'input',
      name: 'emp_salary',
      message: 'Enter Employee Salary:',
      validate: (input) => (!isNaN(parseFloat(input)) ? true : 'Please enter a valid number.'),
      filter: (input) => parseFloat(input),
    },
    {
      type: 'input',
      name: 'emp_department',
      message: 'Enter Employee Department:',
    },
  ]);

  employeeService.addEmployee(employee);
}

// Prompt to remove an employee by ID
async function removeEmployee(): Promise<void> {
  const { emp_id } = await inquirer.prompt([
    {
      type: 'input',
      name: 'emp_id',
      message: 'Enter Employee ID to remove:',
      validate: (input) => (!isNaN(parseInt(input)) ? true : 'Please enter a valid number.'),
      filter: (input) => parseInt(input),
    },
  ]);

  employeeService.removeEmployee(emp_id);
}
