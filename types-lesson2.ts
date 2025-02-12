//Boolean
let isThisVideoDone: boolean = false;

//Numbers

let myNumber: number = 4;

//Text, string

let myName: string = "John"

//Template strings

let greeting: string = "Hello, " + myName;
let greeting2: string = `Hello, ${myName}`;

//Arrays

let count: number[] = [1, 2, 3, 4];
let count1: Array<number> = [1, 2, 3, 4];


//If you don't know the type (watch out for using this! It's easy to use this a lot, but you'll miss out on type checking!)
let anything: any = 4;
anything = "Some text";
anything = false

//Returning nothing

function greeter(name: string) : void{
    console.log("Hello, " + name);
}


//Enums
let joystickStatus = 1;
enum Directions { Up, Down, Left, Right };


if (joystickStatus === Directions.Left) {
    //Move the player to left
}