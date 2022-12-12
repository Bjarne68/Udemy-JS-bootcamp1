const student = {
  firstName: "David",
  lastName: "Jones",
  strengths: ["Music", "Art"],
  exams: {
    midterm: 92,
    final: 88,
  },
};

const avg = (student.exams.midterm + student.exams.final) / 2;

const shoppingCart = [
  {
    product: "Jenga Classic",
    price: 6.88,
    quantity: 1,
  },
  {
    product: "Echo Dot",
    price: 29.99,
    quantity: 3,
  },
  {
    product: "Fire Stick",
    price: 39.99,
    quantity: 2,
  },
];

const game = {
  player1: {
    username: "Blue",
    playingAs: "X",
  },
  player2: {
    username: "Muffins",
    playingAs: "O",
  },
  board: [
    ["O", null, "X"],
    ["X", "O", "X"],
    [null, "O", "X"],
  ],
};

function isValidPassword(password, username) {
  if (password.length < 8 && password.indexOf(username) !== -1) {
    return false;
  }
  for (let index = 0; index < password.length; index++) {
    if (password[index] == " ") {
      return false;
    }
  }
  return true;
}

function average(arr) {
  let total = 0;
  arr.forEach((num) => {
    total += num;
  });

  return total / arr.length;
}

function isPangram(string) {
  let string2 = string.toLowerCase();
  for (let char of "abcdefghijklmnopqrstuvxyz ") {
    if (!string2.includes(char)) {
      return false;
    }
  }
  return true;
}

// function getCard() {
//   let values = [
//     "2",
//     "3",
//     "4",
//     "5",
//     "6",
//     "7",
//     "8",
//     "9",
//     "10",
//     "J",
//     "Q",
//     "K",
//     "A",
//   ];
//   let valIdx = Math.floor(Math.random() * values.length);
//   let value = values[valIdx];

//   let suits = ["ruter", "spader", "hjärter", "klöver"];
//   let suitIdx = Math.floor(Math.random() * suits.length);
//   let suit = suits[suitIdx];
//  return {value: value, suit, suit}
// }

function pick(arr) {
  let idx = Math.floor(Math.random() * arr.length);
  return arr[idx];
}

function getCard() {
  let values = [
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K",
    "A",
  ];

  let suits = ["ruter", "spader", "hjärter", "klöver"];

  return { value: pick(values), suit: pick(suits) };
}

function doubleArr(arr) {
  let result = [];
  let double;
  for (let num of arr) {
    let double = num * 2;
    result.push(double);
  }
  console.log(double);
  return result;
}

function outer() {
  let movie = "Amadeus";
  function inner() {
    let movie = "The Shining";
    function extraInner() {
      console.log(movie.toUpperCase());
    }
    extraInner();
  }
  inner();
}

let sum = function (x, y) {
  return x + y;
};

function add(x, y) {
  return x + y;
}
function subtract(x, y) {
  return x - y;
}

function multiply(x, y) {
  return x * y;
}

function divide(x, y) {
  return x / y;
}

let operations = [add, subtract, multiply, divide];

for (let func of operations) {
  let result = func(30, 5);
  console.log(result);
}

let thing = {
  doSomethong: multiply,
};

function callThreeTimes(f) {
  f();
  f();
  f();
}

function cry() {
  // console.log("BOO HOO");
}

function rage() {
  console.log("I HATE EVERYTHING!");
}

function repeatNTimes(action, num) {
  for (let i = 0; i < num; i++) {
    action();
  }
}

repeatNTimes(cry, 13);

function pickOne(f1, f2) {
  let rand = Math.random();
  // console.log(rand);
  if (rand < 0.5) {
    f1();
  } else {
    f2();
  }
}

function multiplyBy(num) {
  return function (x) {
    return x * num;
  };
}

const triple = multiplyBy(3);
const double = multiplyBy(2);
const halv = multiplyBy(0.5);

function makeBetweenFunc(x, y) {
  return function (num) {
    return num >= x && num <= y;
  };
}

//const isChild = makeBetweenFunc(0, 18);
let isInNinties = makeBetweenFunc(1990, 1999);

function grumpus() {
  alert("GO AWAY!");
}

// setTimeout(function () {
//   alert("WELCOME!!");
// }, 5000);

let btn = document.querySelector("button");
btn.addEventListener("click", function () {
  alert("WHY DID YOU CLICK ME??");
});

const numbers = [20, 21, 22, 23, 24, 25, 26, 27];

// Using anonymous function expression:
numbers.forEach(function (num) {
  // console.log(num * 2);
});

function printTriple(n) {}

numbers.forEach(printTriple);

const books = [
  {
    title: "Good Omens",
    authors: ["Terry Pratchett", "Neil Gaiman"],
    rating: 4.25,
  },
  {
    title: "Bone: The Complete Edition",
    authors: ["Jeff Smith"],
    rating: 4.42,
  },
  {
    title: "American Gods",
    authors: ["Neil Gaiman"],
    rating: 4.11,
  },
  {
    title: "A Gentleman in Moscow",
    authors: ["Amor Towles"],
    rating: 4.36,
  },
];

// Printing all book titles using forEach:
books.forEach(function (book) {
  // console.log(book.title.toUpperCase());
});

for (let book of books) {
  // console.log(book.title.toUpperCase());
}

for (let i = 0; i < books.length; i++) {
  // console.log(books[i].title.toUpperCase());
}
numbers.forEach(function (num, idx) {
  // console.log(idx, num);
});

const numbers2 = [20, 21, 22, 23, 24, 25, 26, 27];
const words = ["asap", "byob", "rsvp", "diy"];

//Map creates a new array by calling your callback function with each element in the original array.
const doubles = numbers.map(function (num) {
  return num * 2;
});

// console.log(doubles);

const numDetail = numbers.map(function (n) {
  return {
    value: n,
    isEven: n % 2 === 0,
  };
});
console.log(numDetail);

const abbrevs = words.map(function (word) {
  return word.toUpperCase().split("").join(".");
});
// console.log(abbrevs);

const titles = books.map(function (b) {
  return b.title;
});

// console.log(titles);

const square = (x) => {
  return x * x;
};

//parens are option when you have 1 parameter
const isEven = (num) => {
  return num % 2 === 0;
};

//Must include parens for multiple parameters
const multiply2 = (x, y) => {
  return x * y;
};

// Must include parens for zero parameters
const greet = () => {
  console.log("HI!");
};

const square3 = (n) => {
  return n * n;
};
// Implicit Return, on multiple lines using parens
const square1 = (n) => n * n;

// Implicit return one-liner:
const square2 = (n) => n * n;

const nums = [1, 2, 3, 4, 5, 6, 7, 8];

// ALL THREE VERSIONS GIVE US THE SAME RESULT:
const doubles1 = nums.map(function (n) {
  return n * 2;
});

const doubles2 = nums.map((n) => {
  return n * 2;
});

const doubles3 = nums.map((n) => n * 2);

const parityList = nums.map(function (n) {
  if (n % 2 === 0) return "even";
  return "odd";
});

const parityList1 = nums.map((n) => {
  if (n % 2 === 0) return "even";
  return "odd";
});

const parityList2 = nums.map((n) => (n % 2 === 0 ? "even" : "odd"));

const parityList3 = nums.map((n) => (n % 2 === 0 ? "even" : "odd"));

let movies = [
  "The Fantastic Mr. Fox",
  "Mr. and Mrs. Smith",
  "Mrs. Doubtfire",
  "Mr. Deeds",
];

// Find first movie that includes 'Mrs' in its title:
const movie = movies.find((movie) => {
  return movie.includes("Mrs");
});

//Find first movie that begins with 'Mrs':
const movie2 = movies.find((m) => m.indexOf("Mrs") === 0);

//Find first book w/ rating over 4.3
const goodBook = books.find((b) => b.rating >= 4.3);

//Find first book with Neil Gaiman as an author:
const neilBook = books.find((b) => b.authors.includes("Neil Gaiman"));

const nums1 = [34, 35, 67, 54, 109, 102, 32, 9];

const odds = nums1.filter((n) => n % 2 === 1);
const evens = nums1.filter((n) => n % 2 === 0);
const bigNums = nums1.filter((n) => n > 50);
const smallNums = nums1.filter((n) => n < 50);

const books1 = [
  {
    title: "Good Omens",
    authors: ["Terry Pratchett", "Neil Gaiman"],
    rating: 4.25,
    genres: ["fiction", "fantasy"],
  },
  {
    title: "Changing My Mind",
    authors: ["Zadie Smith"],
    rating: 3.83,
    genres: ["nonfiction", "essays"],
  },
  {
    title: "Bone: The Complete Edition",
    authors: ["Jeff Smith"],
    rating: 4.42,
    genres: ["fiction", "graphic novel", "fantasy"],
  },
  {
    title: "American Gods",
    authors: ["Neil Gaiman"],
    rating: 4.11,
    genres: ["fiction", "fantasy"],
  },
  {
    title: "A Gentleman in Moscow",
    authors: ["Amor Towles"],
    rating: 4.36,
    genres: ["fiction", "historical fiction"],
  },
  {
    title: "The Name of the Wind",
    authors: ["Patrick Rothfuss"],
    rating: 4.54,
    genres: ["fiction", "fantasy"],
  },
  {
    title: "The Overstory",
    authors: ["Richard Powers"],
    rating: 4.19,
    genres: ["fiction", "short stories"],
  },
  {
    title: "The Way of Kings",
    authors: ["Brandon Sanderson"],
    rating: 4.65,
    genres: ["fantasy", "epic"],
  },
  {
    title: "Lord of the flies",
    authors: ["William Golding"],
    rating: 3.67,
    genres: ["fiction"],
  },
];

//All books rated over 4.3:
const goodBooks = books1.filter((b) => b.rating > 4.3);

// All books with fantasy as a genre:
const fantasyBooks = books1.filter((book1) => book1.genres.includes("fantasy"));

const fictionBook = books1.filter((book1) => book1.genres.includes("fiction"));

// all books that are either short stories or essays:
const shortForm = books1.filter(
  (book1) =>
    book1.genres.includes("short stories") || book1.genres.includes("essays")
);

// Simple search functionality:
const query = "The";
const results = books1.filter((book1) => {
  const title = book1.title.toLowerCase();
  return title.includes(query.toLowerCase());
});

const words1 = ["dog", "dig", "log", "bag", "wag"];

//Is every word 3 characters long?
const all3Letters = words1.every((word) => word.length === 3);

// Do all words end in 'g'?
const allEndInG = words1.every((word) => {
  const last = word.length - 1;
  return word[last] === "g";
});

//Does at least 1 book start with 'd'?
const someStartWithD = words1.some((word) => word[0] === "d");

// Do all words start with 'd'?
const allStartWithD = words1.every((word) => word[0] === "d");

//Are all books rated 3.5 or higher?
const allGoodBooks = books1.every((book) => book.rating > 3.5);

//Do any books have 2 authors?
const any2Authors = books.some((book) => book.authors.length === 2);

const prices = [400.5, 3000, 99.99, 35.99, 12.0, 9500];

// Ascending Sort:
const ascSort = prices.slice().sort((a, b) => a - b);

// Descending Sort:
const descSort = prices.slice().sort((a, b) => b - a);

// Sorting books by their rating:
let sorteradBoklista = books1.sort((a, b) => b.rating - a.rating);

const nums2 = [3, 4, 5, 6, 7];
// To multiply all values in nums:
const product = nums2.reduce((total, currentVal) => {
  return total * currentVal;
});

const grades = [87, 64, 96, 92, 88, 99, 73, 70, 64];

// One approach to find max using reduce:
// const maxGrade = grades.reduce((max, currVal) => {
//   if (currVal > max) return currVal;
//   return max;
// });

// A shorter version using Math.max:
const maxGrade = grades.reduce((max, currVal) => {
  return Math.max(max, currVal);
});

// Finding the min value using Math.min:
const minGrade = grades.reduce((min, currVal) =>
  //using implicit return for variety's sake
  Math.min(min, currVal)
);

const total = [10, 20, 30, 40, 50].reduce((sum, currVal) => {
  return sum + currVal;
}, 1000); //sum starts at 1000, then each element is added to it

const votes = [
  "y",
  "kanske",
  "n",
  "y",
  "n",
  "y",
  "n",
  "y",
  "n",
  "n",
  "n",
  "y",
  "y",
];

// The shorter version:
const results1 = votes.reduce((tally, val) => {
  tally[val] = (tally[val] || 0) + 1;
  return tally;
}, {});

// To group books by rating:
const groupedByRatings = books1.reduce((groupedBooks, book) => {
  const key = Math.floor(book.rating);
  if (!groupedBooks[key]) groupedBooks[key] = [];
  groupedBooks[key].push(book);
  return groupedBooks;
}, {});
