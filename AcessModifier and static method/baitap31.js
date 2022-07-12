var Role;
(function (Role) {
    Role[Role["admin"] = 1] = "admin";
    Role[Role["user"] = 2] = "user";
})(Role || (Role = {}));
var User = /** @class */ (function () {
    function User(name, email, role) {
        this.name = name;
        this.email = email;
        this.role = role;
    }
    User.prototype.getInfo = function () {
        return "".concat(this.name, " ").concat(this.email, " ").concat(this.role);
    };
    User.prototype.isAdmin = function () {
        if (this.role == 1) {
            return " là admin";
        }
        else {
            return " là người dùng bình thường";
        }
    };
    User.prototype.setName = function (name) {
        this.name = name;
    };
    User.prototype.setEmail = function (email) {
        this.email = email;
    };
    return User;
}());
var User1 = new User("Ngoc", "Ngoc@gmail.com", 1);
var User2 = new User("Kiet", "Kiet@gmail.com", 2);
console.log(User1.getInfo());
console.log(User1.isAdmin());
console.log(User2.getInfo());
console.log(User2.isAdmin());
User1.setName("Tan");
User1.setEmail("Tan@gmail.com");
console.log(User1.getInfo());
console.log(User1.isAdmin());
