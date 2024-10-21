import { EmployeeController } from './controller/EmployeeController';

async function runApp() {
  console.log('Welcome to the Employee Management System!');
  await EmployeeController();
}

runApp();
