"use strict";
// Question 1: OOP Related
Object.defineProperty(exports, "__esModule", { value: true });
class Book {
    title;
    author;
    publicationyear;
    genre;
    constructor(title, author, publicationyear, genre) {
        this.title = title;
        this.author = author;
        this.publicationyear = publicationyear;
        this.genre = genre;
    }
    // Method to display book details
    displayDetails() {
        console.log(`Title : ${this.title}`);
        console.log(`Author : ${this.author}`);
        console.log(`publicationYear : ${this.publicationyear}`);
        console.log(`Genre : ${this.genre}`);
    }
    // Method to check if the book is a recent publication (within the last 5 years)
    isRecent() {
        const currentYear = new Date().getFullYear();
        const launch = currentYear - this.publicationyear <= 5;
        if (launch) {
            console.log(`This book was launched in the last five years.`);
        }
        else {
            console.log(`This book is not a recent five-year launch.`);
        }
    }
    // Method to change the genre of the book
    changeGenre(genre) {
        console.log(`New Genre : ${(this.genre = genre)}`);
    }
    // Method to check if the book's author matches a given author name
    isAuthor(givenAuthor) {
        console.log(this.author.toLowerCase() === givenAuthor.toLowerCase());
    }
}
const book = new Book("The Great Gatsby", "F. Scott Fitzgerald", 1925, "Fiction");
// Display book details
book.displayDetails();
// Check if the book is a recent publication
book.isRecent(); // Output: This book is not a recent five-year launch
// Change the genre of the book
book.changeGenre("Classic"); // Output: Classic
// Check if the book's author matches a given author name
console.log(book.isAuthor("F. Scott Fitzgerald")); // Output: true
console.log(book.isAuthor("J.K. Rowling")); // Output: false
