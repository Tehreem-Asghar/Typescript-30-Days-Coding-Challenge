"use strict";
// Question 2: Nested Object with Interfaces
Object.defineProperty(exports, "__esModule", { value: true });
function findPersonbycity(person, city) {
    for (const person of people) {
        for (const address of person.addresses) {
            if (address.city.toLowerCase() === city.toLowerCase()) {
                return { name: person.name, email: person.email };
            }
        }
    }
    return undefined;
}
let people = [{
        name: "Tehreem",
        age: 18,
        email: "tehreem@gmail.com",
        phone: 2133678945693,
        addresses: [
            { street: "789 Oak St", city: "Chicago", state: "IL", zipcode: 60601 },
            { street: "101 Pine St", city: "New York", state: "NY", zipcode: 10002, },
        ],
    },
];
// Test the function with a city that exists in the addresses
console.log(findPersonbycity(people, 'New York')); // Output: { name: 'Tehreem', email: 'tehreem@gmail.com' }
// Test the function with a city that does not exist in the addresses
console.log(findPersonbycity(people, 'Karachi')); // Output: undefined
