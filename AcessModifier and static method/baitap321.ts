import {Employee} from "./baitap32"

export class employeeManager {
    static employees: Employee[] = [];

    constructor() {
    }

    add(employee: Employee): void {
        employeeManager.employees.push(employee);
    }

    getList(): Employee[] {
        return employeeManager.employees;
    }

    delete(ID: string): void {
        let indexEmployeeDelete = this.findEmployee(ID);
        if (indexEmployeeDelete != -1) {
            employeeManager.employees.splice(indexEmployeeDelete, 1);
        } else {
            throw new Error('delete error')
        }
    }

    update(ID: string, firstName: string, lastName: string, birthday: string, address: string, position: string) {
        let indexEmployeeUpdate = this.findEmployee(ID);
        if (indexEmployeeUpdate != -1) {
            employeeManager.employees[indexEmployeeUpdate].setFirstName(firstName);
            employeeManager.employees[indexEmployeeUpdate].setLastName(lastName);
            employeeManager.employees[indexEmployeeUpdate].setBirthday(birthday);
            employeeManager.employees[indexEmployeeUpdate].setAddress(address);
            employeeManager.employees[indexEmployeeUpdate].setPosition(position);
            throw new Error('update error')
        }
    }

    findEmployee(ID: string) {
        let i = -1;
        employeeManager.employees.forEach((employee, index) => {
            if (employee.ID === ID) {
                i = index;
            }
        })

        return i;
    }
}
let employeeManager1 = new employeeManager();
let employee1 = new Employee("1","Ngoc","Ngo","1995-5-28","Ha noi","giam doc");
let employee2 = new Employee("2","Kiet","Tran","1996-6-26","Quang nam","nhan vien");
let employee3 = new Employee("3","Tan","Nguyen","1997-7-27","Ha noi","giam doc");

employeeManager1.add(employee1);
employeeManager1.add(employee2);
employeeManager1.add(employee3);

console.log(employeeManager1.getList());

employeeManager1.delete("2")
console.log(employeeManager1.getList());

employeeManager1.update("3","Tuyen","Cao"," "," "," ");
console.log(employeeManager1.getList());