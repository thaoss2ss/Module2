class Staff {
    name: string;
    email: string;
    age: number;

    constructor(name: string, email: string, age: number) {
        this.name = name;
        this.email = email;
        this.age = age;
    }
    getName() :string {
        return this.name;
    }
    setName(name:string) :void {
        this.name = name;
    }
    getEmail() :string {
        return this.email;
    }
    setEmail(email:string) :void {
        this.email = email;
    }
    getAge() :number {
        return this.age;
    }
    setAge(age: number) :void {
        this.age = age;
    }
}

let staff = new Staff('Ngo Minh Ngoc','ngocskit@gmail.com',17);
console.log(staff);
console.log(`Tên của nhân viên: ${staff.getName()}`);
console.log(`email: ${staff.getEmail()}`);
console.log(`Tuổi: ${staff.getAge()}`);

let staff2 = new Staff(null, null, null);
staff2.setName('Pham Thanh Thao');
console.log(staff2.getName())
staff2.setEmail('phamThao@gmail.com');
console.log(staff2.getEmail())
staff2.setAge(22);
console.log(staff2.getAge())