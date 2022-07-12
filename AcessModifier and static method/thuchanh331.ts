export class ProductManager {
    private product = [];
    constructor(){
    }
    getAll(){
        return this.product;
    }
    add(product) {
        this.product.push(product);
    }
}