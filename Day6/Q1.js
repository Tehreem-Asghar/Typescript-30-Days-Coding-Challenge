"use strict";
// Question 11: Simple Calculator
// *Task:*
// Create a simple calculator that can perform addition, subtraction, multiplication, and division.
// 1. *Functional Programming Approach:*
//    - Write functions for each operation: add, subtract, multiply, and divide.
//    - Implement a function calculate that takes two numbers and an operation (as a string)
//and returns the result of the operation.
function calculator(num1, num2, operation) {
    let Operation;
    switch (operation) {
        case "Add":
            Operation = num1 + num2;
            break;
        case "sub":
            Operation = num1 - num2;
            break;
        case "mul":
            Operation = num1 * num2;
            break;
        case "div":
            if (num2 === 0) {
                throw new Error("Division by zero is not allowed");
            }
            Operation = num1 / num2;
            break;
        default:
            throw new Error("Invalid Operation");
    }
    return Operation;
}
console.log(calculator(10, 10, "Add")); // output : 20
console.log(calculator(10, 10, "sub")); // output : 0
console.log(calculator(10, 10, "mul")); // output : 100
console.log(calculator(10, 10, "div")); // output : 1
//console.log( Calculator(10,0 ,"div")); // Error : (Division by Zero is not allowed)
// 2. *Object-Oriented Programming (OOP) Approach:*
//    - Create a Calculator class with methods for each operation.
//    - Implement a method calculate in the class that takes two numbers and an operation
// (as a string) and returns the result of the operation.+
class Calculator {
    // Method for addition
    add(num1, num2) {
        return num1 + num2;
    }
    // Method for subtraction
    subtract(num1, num2) {
        return num1 - num2;
    }
    // Method for multiplication
    multiply(num1, num2) {
        return num1 * num2;
    }
    // Method for division
    divide(num1, num2) {
        if (num2 === 0) {
            throw new Error("Division by zero is not allowed");
        }
        return num1 / num2;
    }
    // Calculate method
    operation(num1, num2, operation) {
        switch (operation) {
            case "Add":
                return this.add(num1, num2);
            case "sub":
                return this.subtract(num1, num2);
            case "mul":
                return this.multiply(num1, num2);
            case "div":
                return this.divide(num1, num2);
            default:
                throw new Error("Invalid operation");
        }
    }
}
let cal = new Calculator();
console.log(cal.operation(10, 10, "Add")); // Output: 20
console.log(cal.operation(10, 10, "sub")); // Output: 0
console.log(cal.operation(10, 10, "mul")); // Output: 100
console.log(cal.operation(10, 10, "div")); // Output: 1
console.log(cal.operation(10, 0, "div")); // Error: Division by zero is not allowed
