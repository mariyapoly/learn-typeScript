//  build-ib type :     number, string, boolean, void, undefined, null

let firstName: string;
let lastName: string;
let age: number;
let isActive: boolean;

firstName = "Mariya sultana";
lastName = " Poly";
age = 24;
isActive = true;

let fullName = firstName.concat(lastName);

console.log(`Name: ${fullName}, Age: ${age}, Status: ${isActive}`);

console.log(fullName.split(" "));
console.log(fullName.toUpperCase());
console.log(fullName.toLowerCase());

function func(): void {
  console.log("Hi I am display");
}
func();
