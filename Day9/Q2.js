"use strict";
// ### Question 2: Implement a Queue using TypeScript
Object.defineProperty(exports, "__esModule", { value: true });
class Queue {
    items = []; // Array to hold the queue elements
    // Method to add an element to the end of the queue
    enqueue(item) {
        this.items.push(item);
    }
    // Method to remove and return the element from the front of the queue
    // Returns undefined if the queue is empty
    dequeue() {
        return this.items.shift();
    }
    // Method to return the element at the front of the queue without removing it
    // Returns undefined if the queue is empty
    peek() {
        return this.items[0];
    }
    // Method to check if the queue is empty
    // Returns true if the queue is empty, otherwise false
    isEmpty() {
        return this.items.length === 0;
    }
}
const queue = new Queue();
queue.enqueue("a"); // Adding element "a" to the queue
queue.enqueue("b"); // Adding element "b" to the queue
console.log(queue.peek()); // Output: "a", as "a" is the front element
console.log(queue.dequeue()); // Output: "a", removing and returning the front element
console.log(queue.dequeue()); // Output: "b", removing and returning the next front element
console.log(queue.isEmpty()); // Output: true, as the queue is now empty
