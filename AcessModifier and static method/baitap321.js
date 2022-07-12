"use strict";
exports.__esModule = true;
exports.employeeManager = void 0;
var baitap32_1 = require("./baitap32");
var employeeManager = /** @class */ (function () {
    function employeeManager() {
    }
    employeeManager.prototype.add = function (employee) {
        employeeManager.employees.push(employee);
    };
    employeeManager.prototype.getList = function () {
        return employeeManager.employees;
    };
    employeeManager.prototype["delete"] = function (ID) {
        var indexEmployeeDelete = this.findEmployee(ID);
        if (indexEmployeeDelete != -1) {
            employeeManager.employees.splice(indexEmployeeDelete, 1);
        }
        else {
            throw new Error('delete error');
        }
    };
    employeeManager.prototype.update = function (ID, firstName, lastName, birthday, address, position) {
        var indexEmployeeUpdate = this.findEmployee(ID);
        if (indexEmployeeUpdate != -1) {
            employeeManager.employees[indexEmployeeUpdate].setFirstName(firstName);
            employeeManager.employees[indexEmployeeUpdate].setLastName(lastName);
            employeeManager.employees[indexEmployeeUpdate].setBirthday(birthday);
            employeeManager.employees[indexEmployeeUpdate].setAddress(address);
            employeeManager.employees[indexEmployeeUpdate].setPosition(position);
            throw new Error('update error');
        }
    };
    employeeManager.prototype.findEmployee = function (ID) {
        var i = -1;
        employeeManager.employees.forEach(function (employee, index) {
            if (employee.ID === ID) {
                i = index;
            }
        });
        return i;
    };
    employeeManager.employees = [];
    return employeeManager;
}());
exports.employeeManager = employeeManager;
var employeeManager1 = new employeeManager();
var employee1 = new baitap32_1.Employee("1", "Ngoc", "Ngo", "1995-5-28", "Ha noi", "giam doc");
var employee2 = new baitap32_1.Employee("2", "Kiet", "Tran", "1996-6-26", "Quang nam", "nhan vien");
var employee3 = new baitap32_1.Employee("3", "Tan", "Nguyen", "1997-7-27", "Ha noi", "giam doc");
employeeManager1.add(employee1);
employeeManager1.add(employee2);
employeeManager1.add(employee3);
console.log(employeeManager1.getList());
employeeManager1["delete"]("2");
console.log(employeeManager1.getList());
employeeManager1.update("3", "Tuyen", "Cao", " ", " ", " ");
console.log(employeeManager1.getList());
