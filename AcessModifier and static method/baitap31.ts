enum Role {
    admin=1,
    user
}
class User {
    protected name: string;
    protected email: string;
    public role: Role;

    constructor(name: string, email: string, role: number){
        this.name = name;
        this.email = email;
        this.role = role;
    }
    getInfo(){
        return `${this.name} ${this.email} ${this.role}`;
    }
    isAdmin():string {
        if(this.role == 1){
            return " là admin";
        }
        else {
            return " là người dùng bình thường";
        }
    }
    setName(name: string){
        this.name = name;
    }
    setEmail(email: string){
        this.email = email;
    }
}
let User1 = new User("Ngoc","Ngoc@gmail.com",1);
let User2 = new User("Kiet","Kiet@gmail.com",2);

console.log(User1.getInfo());
console.log(User1.isAdmin());

console.log(User2.getInfo());
console.log(User2.isAdmin());

User1.setName("Tan");
User1.setEmail("Tan@gmail.com");
console.log(User1.getInfo());
console.log(User1.isAdmin());