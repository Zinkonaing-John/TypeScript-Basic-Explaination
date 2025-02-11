//arrow functions
var Greeter = /** @class */ (function () {
    function Greeter() {
        this.firstName = "John";
    }
    Greeter.prototype.sayHello = function () {
        var _this = this;
        setTimeout(function () {
            console.log("Hello, " + _this.firstName);
        }, 5000);
    };
    return Greeter;
}());
var greeter3 = new Greeter();
greeter3.sayHello();
