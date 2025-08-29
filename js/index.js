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


class Episode {
    constructor(title, duration, minutesWatched) {
        this.title = title;
        this.duration = duration;
        this.minutesWatched = this.minutesWatched;

        if (minutesWatched === duration) {
            this.hasBeenWatched = true;
        } else {
            this.hasBeenWatched = false;
        }
    }

}

let firstEpisode = new Episode("Beautful Beginnings", 45, 45); 

console.log(firstEpisode);


//Switch statement
let firstUser = {
    name: "Korkro",
    age: 33,
    accountLevel: "normal"
}

let secondUser = {
    name: "Amaina",
    age: 22,
    accountLevel: "premium"
}

let thirdUser = {
    name: "Kojo",
    age: 45,
    accountLevel: "mega-premium"
}

switch(firstUser.accountLevel) {
    case "normal":
        console.log("You have a normal accoutn!");
        break;
    case "premium":
        console.log("You have a premium account!");
        break;

    case "mega-premium":
        console.log("You have mega-premium account!");
        break;
    default:
        console.log("Unknown account type!");
}





/*
const body = document.querySelector('body');

for(let i = 0; i < 12; i++) {
  let newDiv = document.createElement('div');
  newDiv.classList.add('series-frame');
  let newTitle = document.createElement('h2');
  newTitle.innerText = 'The Story of Tau';
  let newParagraph = document.createElement('p');
  newParagraph.innerText = `${episodes[i].title}
${episodes[i].duration} minutes
${episodes[i].watchedText}
`;
  newDiv.append(newTitle);
  newDiv.append(newParagraph);
  if (episodes[i].continueWatching) {
    let newButton = document.createElement('button');
    newButton.innerText = 'Continue watching';
    newParagraph.append(newButton);
  }
  body.append(newDiv);
}
*/

