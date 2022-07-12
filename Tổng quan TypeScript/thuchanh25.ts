enum Gender{
    MALE,
    FEMALE,
    OTHER
}
class Employee {
    fullName: string;
    gender: Gender = Gender.OTHER;
    birthday?: Date;
    email: string;
    phoneNumber: string = "";
    constructor(fullName: string, gender: Gender,birthday: Date, email: string, phoneNumber: string) {
        this.fullName = fullName;
        this.gender = gender;
        this.birthday = birthday;
        this.email = email;
        this.phoneNumber = phoneNumber;
    }
}
let employeeList: Employee[] = [];
employeeList.push(new Employee("Kiet Ngu Ngoc",Gender.FEMALE, new Date("1900-01-01"),"kiet@gmail.com","097584625"));
employeeList.push(new Employee("Ngo Minh Ngoc",Gender.MALE, new Date("2000-05-07"),"Ngoc@gmail.com","095884255"));
employeeList.push(new Employee("Huynh An Nhien", Gender.OTHER, new Date("1990-09-19"), "nhienhuynh@gmail.com", "0123456791"));

function showEmployee(employee: Employee){
    console.log(employee);
}
employeeList.forEach(showEmployee);