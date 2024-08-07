// ### Question 2: Implement a Queue using TypeScript

class Queue<T> {

  private items: T[] = []; // Array to hold the queue elements

  // Method to add an element to the end of the queue
  enqueue(item: T): void {
    this.items.push(item);
  }

  // Method to remove and return the element from the front of the queue
  // Returns undefined if the queue is empty
  dequeue(): T | undefined {
    return this.items.shift();
  }
  
  // Method to return the element at the front of the queue without removing it
  // Returns undefined if the queue is empty
  peek(): T | undefined {
    return this.items[0];
  }

  // Method to check if the queue is empty
  // Returns true if the queue is empty, otherwise false
  isEmpty(): boolean {
    return this.items.length === 0;
  }
}
const queue = new Queue<string>();
queue.enqueue("a"); // Adding element "a" to the queue
queue.enqueue("b"); // Adding element "b" to the queue
console.log(queue.peek()); // Output: "a", as "a" is the front element
console.log(queue.dequeue()); // Output: "a", removing and returning the front element
console.log(queue.dequeue()); // Output: "b", removing and returning the next front element
console.log(queue.isEmpty()); // Output: true, as the queue is now empty
