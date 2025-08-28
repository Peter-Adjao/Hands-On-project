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

let guests = ["Kofi", "Ama", "Yaw", "Tettey" ];

console.log(guests);
console.log(guests[0]);

let firstGuest = 'Ama';
let secondGuest = 'Kofi';

let guest = [firstGuest, secondGuest];

console.log(guest);

let newMember = {name: "Yaw", vip: true};
let oldMember = {name: "Kokor", vip: false};
let goldMember = {name: "Amina", vip: false};
let platinumMember = {name: "Yaa", vip: true};


let allMembers = [newMember, oldMember, goldMember, platinumMember];
allMembers.push({name: "kojo", vip: true});
allMembers.pop(oldMember);

console.log(allMembers.length);

console.log(allMembers);



