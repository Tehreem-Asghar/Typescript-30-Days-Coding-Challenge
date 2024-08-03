"use strict";
// Question 12: Separate Elements by Type
// *Task:*
// Given an array with mixed types of elements, separate them into different
// arrays based on their type (number, string, boolean).
function mixTypeEle(array) {
    let stringEle = [];
    let numberEle = [];
    let booleanEle = [];
    for (let i = 0; i < array.length; i++) {
        let elements = array[i];
        if (typeof elements === "string") {
            stringEle.push(elements);
        }
        else if (typeof elements === "number") {
            numberEle.push(elements);
        }
        else if (typeof elements === "boolean") {
            booleanEle.push(elements);
        }
    }
    console.log(stringEle);
    console.log(numberEle);
    console.log(booleanEle);
}
mixTypeEle([1, true, "Tehreem", false, "Namal", "Humail", 100, 8]);
