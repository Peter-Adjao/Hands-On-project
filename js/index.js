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

let seatsLeft = 8;
let passengersStillToBoard = 10;
let passengersBoarded = 0;

while ( seatsLeft > 0 && passengersStillToBoard > 0) {
    passengersBoarded++;
    seatsLeft--;
    passengersStillToBoard--;
}

console.log(passengersBoarded + " successfully on board!");

const add = (firstNumber, secondNumber) => {
    const result = firstNumber + secondNumber;
    return result;
}
console.log(add(5, 5));

class BankAccount {
    constructor(owner, balance) {
        this.owner = owner;
        this.balance = balance;
    }

    showBalance( ) {
        console.log("Balance: " + this.balance + " cedis" );
    }

    deposit(amount) {
        console.log("Depositing " + amount + "cedis");
        this.balance += amount;
        this.showBalance();
    } 

    withdraw(amount) {
        if (amount > this.balance) {
            console.log("Withdrawal denied!");
        } else {
            console.log("Withdrawing " + amount + " cedis");
            this.balance -= amount;
            this.showBalance();
        }
    }


}

const newAccount = new BankAccount("Atter Peter", 500);
newAccount.withdraw(400);
newAccount.showBalance();

class Show  {
    constructor(title, numberOfSeasons) {
        this.title = title;
        this.numberOfSeassons = numberOfSeasons;
        this.ratings = [];
        this.averageRating = 0;
    }
    addRatings(rating) {
        this.ratings.push(rating);
        let sum = 0;
        for (let rating of this.ratings) {
            sum += rating;
        }
        this.averageRating = sum / this.ratings.length;
    }
}

const newShow = new Show("New+plus", 5) 
console.log(newShow);


console.log(Math.floor(Math.random() * 6 + 1 ));


class BePolite {
    static sayHello() {
        console.log("Hello!");
    }
    static sayHelloTo(name) {
        console.log("Hello, " + name +"!");
    }
    static add(firstNumber, secondNumber) {
        return firstNumber + secondNumber;
    }
 }
 BePolite.sayHello();
  BePolite.sayHelloTo("Atter");
  const sum = console.log(BePolite.add(3, 4));


  //clean fuctions
  const firstOnlineUser = {
    name: "Kojo",
    online: true,
    accounttype: "normal"
  };

  const secondOnlineUser = {
    name: "Amina",
    online: true,
    occountType: "premium"
  };

  const thirdOnlineUser = {
    name: "Ama",
    online: true,
    acountType: "premium"
  };

  const sendWelcomeMessageToUser = (user) => {
    if (user.online) {
        if (user.accountType === "normal") {
            console.log("Hello " + user.name + "!");
        } else {
            console.log("Welcome back premium user " + user.name + "!");
        }
    }

  }

  sendWelcomeMessageToUser(firstOnlineUser);




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

//second Snippet
const tauRatings = [5, 4, 5, 5, 1, 2];
const colinRatings = [5, 5, 5, 4, 5];

const tauAverage = calculateAverageRating(tauRatings);
const colinAverage = calculateAverageRating(colinRatings);

if (tauAverage && colinAverage) {
  document.querySelector('#tau-score').innerText = tauAverage.toFixed(1) + ' stars';
  document.querySelector('#colin-score').innerText = colinAverage.toFixed(1) + ' stars';
  document.querySelector('#clara-score').innerText = `${calculateAverageRating([]) === 0 ? 'No ratings' : calculateAverageRating([]) + ' stars'}`
}




*/

