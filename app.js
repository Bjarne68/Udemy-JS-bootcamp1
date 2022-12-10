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
  console.log("BOO HOO");
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
  console.log(rand);
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

setTimeout(function () {
  alert("WELCOME!!");
}, 5000);

let  btn = document.querySelector('button')
btn.addEventListener('click', function(){
  alert("WHY DID YOU CLICK ME??")
})