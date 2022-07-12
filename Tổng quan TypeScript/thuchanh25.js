var Gender;
(function (Gender) {
    Gender[Gender["MALE"] = 0] = "MALE";
    Gender[Gender["FEMALE"] = 1] = "FEMALE";
    Gender[Gender["OTHER"] = 2] = "OTHER";
})(Gender || (Gender = {}));
var Employee = /** @class */ (function () {
    function Employee(fullName, gender, birthday, email, phoneNumber) {
        this.gender = Gender.OTHER;
        this.phoneNumber = "";
        this.fullName = fullName;
        this.gender = gender;
        this.birthday = birthday;
        this.email = email;
        this.phoneNumber = phoneNumber;
    }
    return Employee;
}());
var employeeList = [];
employeeList.push(new Employee("Kiet Ngu Ngoc", Gender.FEMALE, new Date("1900-01-01"), "kiet@gmail.com", "097584625"));
employeeList.push(new Employee("Ngo Minh Ngoc", Gender.MALE, new Date("2000-05-07"), "Ngoc@gmail.com", "095884255"));
employeeList.push(new Employee("Huynh An Nhien", Gender.OTHER, new Date("1990-09-19"), "nhienhuynh@gmail.com", "0123456791"));
function showEmployee(employee) {
    console.log(employee);
}
employeeList.forEach(showEmployee);
