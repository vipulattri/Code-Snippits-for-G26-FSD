let a = 10;
let b = 5;
let operations = "mutiple";
let result;
switch (operations) {
  case "add":
    result = a + b;
    break;
  case "subtract":
    result = a - b;
    break;
  case "mutiple":
    result = a * b;
    break;
  case "divide":
    result = a / b;
    break;
  default:
    result = "Invalid Operations";
}
console.log(`Result: ${result}`);

// swapping of numbers

let a=6
let b=10
a=a+b
b=a-b
a=a-b
console.log(`The A value is:${a}`);
console.log(`The B value is:${b}`);
