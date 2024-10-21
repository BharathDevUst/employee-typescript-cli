import { Employee } from '../models/Employee';

export class EmployeeService {
  private employees: Employee[] = [];

  // Add a new employee
  addEmployee(employee: Employee): void {
    this.employees.push(employee);
    console.log(`Employee ${employee.emp_name} added successfully!`);
  }

  // List all employees
  listEmployees(): void {
    if (this.employees.length === 0) {
      console.log("No employees found.");
    } else {
      console.log("Employee List:");
      this.employees.forEach(emp => {
        console.log(
          `ID: ${emp.emp_id}, Name: ${emp.emp_name}, Designation: ${emp.emp_designation}, Salary: ${emp.emp_salary}, Department: ${emp.emp_department}`
        );
      });
    }
  }

  // Remove employee by ID
  removeEmployee(emp_id: number): void {
    const index = this.employees.findIndex(emp => emp.emp_id === emp_id);
    if (index !== -1) {
      console.log(`Employee ${this.employees[index].emp_name} removed successfully!`);
      this.employees.splice(index, 1);
    } else {
      console.log(`Employee with ID ${emp_id} not found.`);
    }
  }
}
