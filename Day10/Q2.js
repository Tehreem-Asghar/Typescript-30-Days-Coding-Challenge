"use strict";
// ***Question 20:*** Implement a Simple Student Record
Object.defineProperty(exports, "__esModule", { value: true });
class Student {
    name = "";
    grade = 0;
    // This method sets the student's name
    setName(name) {
        this.name = name;
    }
    // This method sets the student's grade
    setGrade(grade) {
        this.grade = grade;
    }
    // This method returns an object with the student's name and grade
    getRecord() {
        return { name: this.name, grade: this.grade };
    }
}
const student = new Student();
student.setName("Alice");
student.setGrade(90);
console.log(student.getRecord()); // Output: { name: "Alice", grade: 90 }
