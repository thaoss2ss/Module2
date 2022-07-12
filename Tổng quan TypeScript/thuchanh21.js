var Staff = /** @class */ (function () {
    function Staff(name, email, age) {
        this.name = name;
        this.email = email;
        this.age = age;
    }
    Staff.prototype.getName = function () {
        return this.name;
    };
    Staff.prototype.setName = function (name) {
        this.name = name;
    };
    Staff.prototype.getEmail = function () {
        return this.email;
    };
    Staff.prototype.setEmail = function (email) {
        this.email = email;
    };
    Staff.prototype.getAge = function () {
        return this.age;
    };
    Staff.prototype.setAge = function (age) {
        this.age = age;
    };
    return Staff;
}());
var staff = new Staff('Ngo Minh Ngoc', 'ngocskit@gmail.com', 17);
console.log(staff);
console.log("T\u00EAn c\u1EE7a nh\u00E2n vi\u00EAn: ".concat(staff.getName()));
console.log("email: ".concat(staff.getEmail()));
console.log("Tu\u1ED5i: ".concat(staff.getAge()));
var staff2 = new Staff(null, null, null);
staff2.setName('Pham Thanh Thao');
console.log(staff2.getName());
staff2.setEmail('phamThao@gmail.com');
console.log(staff2.getEmail());
staff2.setAge(22);
console.log(staff2.getAge());
