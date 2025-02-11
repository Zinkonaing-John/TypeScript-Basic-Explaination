"use strict";
//Boolean
let isThisVideoDone = false;
//Numbers
let myNumber = 4;
//Text, string
let myName = "John";
//Template strings
let greeting = "Hello, " + myName;
let greeting2 = `Hello, ${myName}`;
//Arrays
let count = [1, 2, 3, 4];
let count1 = [1, 2, 3, 4];
//If you don't know the type (watch out for using this! It's easy to use this a lot, but you'll miss out on type checking!)
let anything = 4;
anything = "Some text";
anything = false;
//Returning nothing
function greeter(name) {
    console.log("Hello, " + name);
}
//Enums
let joystickStatus = 1;
var Directions;
(function (Directions) {
    Directions[Directions["Up"] = 0] = "Up";
    Directions[Directions["Down"] = 1] = "Down";
    Directions[Directions["Left"] = 2] = "Left";
    Directions[Directions["Right"] = 3] = "Right";
})(Directions || (Directions = {}));
;
if (joystickStatus === Directions.Left) {
    //Move the player to left
}
