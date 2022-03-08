"use strict";
//  build-ib type :     number, string, boolean, void, undefined, null
let firstName;
let lastName;
let age;
let isActive;
firstName = "Mariya sultana";
lastName = " Poly";
age = 24;
isActive = true;
let fullName = firstName.concat(lastName);
console.log(`Name: ${fullName}, Age: ${age}, Status: ${isActive}`);
console.log(fullName.split(" "));
console.log(fullName.toUpperCase());
console.log(fullName.toLowerCase());
function func() {
    console.log("Hi I am display");
}
func();
