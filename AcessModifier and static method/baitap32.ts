
export class Employee {
    ID: string;
    private firstName: string;
    private lastName: string;
    private birthday: string;
    private address: string;
    private position: string;

    constructor(ID: string,firstName: string, lastName: string,birthday: string,  address: string, position: string) {
        this.ID = ID;
        this.firstName = firstName;
        this.lastName = lastName;
        this.birthday = birthday;
        this.address = address;
        this.position = position;
    }
    setFirstName(firstName: string){
        this.firstName = firstName;
    }
    setLastName(lastName: string){
        this.lastName = lastName;
    }
    setBirthday(birthday: string): void{
        this.birthday = birthday;
    }
    setAddress(address: string): void{
        this.address = address;
    }
    setPosition(position: string): void{
        this.position = position;
    }

}
