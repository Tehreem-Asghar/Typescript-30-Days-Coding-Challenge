"use strict";
// Question 8: Filter Students with Marks Greater than 80
// *Description:*
// Create an array of objects where each object represents a student with properties name, age,
// and marks. Write a function that filters and prints the data of students who have marks greater 
//than 80.
// Output Should print:
// Sara - Age: 22, Marks: 85
// John - Age: 21, Marks: 90
function printTopStudents(students) {
    for (let i = 0; i < students.length; i++) {
        if (students[i].marks > 80) {
            console.log(` ${students[i].name} - Age: ${students[i].age}, Marks: ${students[i].marks}`);
        }
    }
}
const students = [
    { name: "Ali", age: 20, marks: 75 },
    { name: "Sara", age: 22, marks: 85 },
    { name: "John", age: 21, marks: 90 },
];
printTopStudents(students);
