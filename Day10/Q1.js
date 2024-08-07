"use strict";
// ***Question 19:*** Implement a Basic Counter
Object.defineProperty(exports, "__esModule", { value: true });
class Counter {
    counter = 0;
    // This method increments the counter by 1
    increment() {
        ++this.counter;
    }
    // This method decrements the counter by 1
    decrement() {
        --this.counter;
    }
    // This method returns the current value of the counter
    getValue() {
        return this.counter;
    }
}
const counter = new Counter();
counter.increment();
counter.increment();
console.log(counter.getValue()); // Output: 2
counter.decrement();
console.log(counter.getValue()); // Output: 1
