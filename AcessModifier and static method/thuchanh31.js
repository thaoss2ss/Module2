var Application = /** @class */ (function () {
    function Application(name) {
        this.name = name;
        Application.count++;
    }
    Application.count = 0;
    return Application;
}());
console.log(Application.count);
var app1 = new Application('App One');
console.log(Application.count);
var app2 = new Application('App Two');
console.log(Application.count);
var app3 = new Application('App Three');
console.log(Application.count);
