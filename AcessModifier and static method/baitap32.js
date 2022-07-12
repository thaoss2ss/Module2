"use strict";
exports.__esModule = true;
exports.Employee = void 0;
var Employee = /** @class */ (function () {
    function Employee(ID, firstName, lastName, birthday, address, position) {
        this.ID = ID;
        this.firstName = firstName;
        this.lastName = lastName;
        this.birthday = birthday;
        this.address = address;
        this.position = position;
    }
    Employee.prototype.setFirstName = function (firstName) {
        this.firstName = firstName;
    };
    Employee.prototype.setLastName = function (lastName) {
        this.lastName = lastName;
    };
    Employee.prototype.setBirthday = function (birthday) {
        this.birthday = birthday;
    };
    Employee.prototype.setAddress = function (address) {
        this.address = address;
    };
    Employee.prototype.setPosition = function (position) {
        this.position = position;
    };
    return Employee;
}());
exports.Employee = Employee;
