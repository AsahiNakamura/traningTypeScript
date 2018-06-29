var Cat = /** @class */ (function () {
    function Cat(name) {
        this.name = name;
    }
    Cat.prototype.sayHello = function () {
        return this.name + "だにゃん😺";
    };
    return Cat;
}());
var aki = new Cat("あき"); //letはローカル変数を示す
document.body.innerHTML = aki.sayHello();
