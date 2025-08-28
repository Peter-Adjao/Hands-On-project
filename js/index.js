let numberOfCats = 3;

console.log(numberOfCats);



let myBook = {
    title: "Good times",
    author: "Peter Adjao",
    numberOfPages: 250,
    isAvailable: true
};

let bookTitle = myBook.title;
console.log(bookTitle);

console.log(myBook.title);
console.log(myBook.author);


class Book {
    constructor (title, author, pages) {
        this.title = title;
        this.author = author;
        this.pages = pages; 
    }
}

let myFirstBook = new Book("Big Brains", "Peter Adjao", 115);
console.log(myFirstBook);

let mySecondBook = new Book("New Age Of Tech", "Peter Adjao", 430);
console.log(mySecondBook);