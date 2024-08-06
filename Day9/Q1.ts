// Day 9
// ### Question 1: Implement a Stack using TypeScript
class Stack<T> {
    // Array to hold the stack elements
    private items: T[] = [];
    // Method to add an element to the top of the stack
    push(item: T): void {
      this.items.push(item);
    }
    // Method to remove and return the top element of the stack
    // Returns undefined if the stack is empty
    pop(): T | undefined {
      return this.items.pop();
    }
    // Method to return the top element of the stack without removing it
    // Returns undefined if the stack is empty
    peek(): T | undefined {
      return this.items[this.items.length - 1];
    }
    // Method to check if the stack is empty
    // Returns true if the stack is empty, otherwise false
    isEmpty(): boolean {
      return this.items.length === 0;
    }
  }// intance of Stack class
  const stack = new Stack<number>();
  stack.push(1);  // Adding element 1 to the stack
  stack.push(2);  // Adding element 2 to the stack
  console.log(stack.peek()); // Output: 2, 
  console.log(stack.pop());  // Output: 2, 
  console.log(stack.pop());  // Output: 1, 
  console.log(stack.isEmpty()); // Output: true, 
  