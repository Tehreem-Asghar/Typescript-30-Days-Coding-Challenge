// ***Question 19:*** Implement a Basic Counter

class Counter {
    private counter: number = 0;
    
    // This method increments the counter by 1
    increment(): void {
        ++this.counter;
    }

    // This method decrements the counter by 1
    decrement(): void {
        --this.counter;
    }

    // This method returns the current value of the counter
    getValue(): number {
        return this.counter;
    }
}

const counter = new Counter();
counter.increment();
counter.increment();
console.log(counter.getValue()); // Output: 2
counter.decrement();
console.log(counter.getValue()); // Output: 1
