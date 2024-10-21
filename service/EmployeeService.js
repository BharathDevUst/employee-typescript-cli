"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmployeeService = void 0;
var EmployeeService = /** @class */ (function () {
    function EmployeeService() {
        this.employees = [];
    }
    // Add a new employee
    EmployeeService.prototype.addEmployee = function (employee) {
        this.employees.push(employee);
        console.log("Employee ".concat(employee.emp_name, " added successfully!"));
    };
    // List all employees
    EmployeeService.prototype.listEmployees = function () {
        if (this.employees.length === 0) {
            console.log("No employees found.");
        }
        else {
            console.log("Employee List:");
            this.employees.forEach(function (emp) {
                console.log("ID: ".concat(emp.emp_id, ", Name: ").concat(emp.emp_name, ", Designation: ").concat(emp.emp_designation, ", Salary: ").concat(emp.emp_salary, ", Department: ").concat(emp.emp_department));
            });
        }
    };
    // Remove employee by ID
    EmployeeService.prototype.removeEmployee = function (emp_id) {
        var index = this.employees.findIndex(function (emp) { return emp.emp_id === emp_id; });
        if (index !== -1) {
            console.log("Employee ".concat(this.employees[index].emp_name, " removed successfully!"));
            this.employees.splice(index, 1);
        }
        else {
            console.log("Employee with ID ".concat(emp_id, " not found."));
        }
    };
    return EmployeeService;
}());
exports.EmployeeService = EmployeeService;
