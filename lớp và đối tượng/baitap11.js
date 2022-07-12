class QuadraticEquation {
    constructor(a, b, c,) {
        this.a = a;
        this.b = b;
        this.c = c;
        this.delta = Math.pow(b,2)-4*a*c;
    }

    get() {
        return `${this.a} ${this.b} ${this.c}`;
    }
    getDiscriminant(){
        return this.delta;
    }

    getRoot1(){
        return this.x1 = this.x2 = -this.b/(2*this.a);
    }
    getRoot2(){
        return this.x1 = (-this.b + Math.pow(this.delta,0.5))/(2*this.a);
    }
    getRoot3(){
        return this.x2 = (-this.b - Math.pow(this.delta,0.5))/(2*this.a);
    }
    getRoot(){
        return console.log("The equation has no roots");
    }
    check(){
        if(this.delta > 0){
            return this.getRoot2() +" và "+ this.getRoot3();
        }
        else if( this.delta === 0){
            return this.getRoot1();
        }
        else{
            return this.getRoot();
        }
    }
}
let Quadrakill = new QuadraticEquation(2,5,3);
console.log(Quadrakill.check())


