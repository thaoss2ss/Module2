export class Book {
    ID: string;
    name: string;

    constructor(ID: string,
                name: string) {
        this.ID = ID;
        this.name = name;
    }

    getName(): string {
        return this.name;
    }

    setName(name: string) {
        this.name = name;
    }

    getID(): string {
        return this.ID;
    }

}

