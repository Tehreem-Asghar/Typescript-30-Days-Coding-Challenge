"use strict";
// Day 17
//### Question 1: *Calculate the Product of Odd Numbers*
Object.defineProperty(exports, "__esModule", { value: true });
function productOfOdds(number) {
    // Start with 1 since multiplying by 0 will always give 0
    let productOfOdds = 1;
    number.forEach((element) => {
        // Check if the number is odd
        if (element % 2 !== 0) {
            // Multiply the product by the odd number
            productOfOdds *= element;
        }
    });
    return productOfOdds;
}
console.log(productOfOdds([2, 3, 5, 6])); // Output: 15
console.log(productOfOdds([2, 4, 6, 8])); // Output: 1
