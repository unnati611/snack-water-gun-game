//let arr = ["snack", "gun", "water"];
// const random = Math.floor(Math.random() * 3);
// let computerGuess = arr[random];
// console.log(computerGuess);

// let a = 0;
// a = prompt("enter any one  word from snake ,water , gun ");
// if (computerGuess === arr[0] && a === "water") {
//     alert(" you lost ! try again !!! ");
//   } else if (computerGuess === arr[1] && a === "water") {
//     alert("congratulations you are winner!!!");
//   } else if (computerGuess === arr[1] && a === "snake") {
//     alert(" you lost ! try again !!! ");
//   } else if (computerGuess === arr[2] && a === "snake") {
//     alert("congratulations you are winner!!!");
//   } else if (computerGuess === arr[0] && a === "gun") {
//     alert("congratulations you are winner!!!");
//   } else if (computerGuess === arr[2] && a === "gun") {
//     alert(" you lost ! try again !!! ");
//   } else {
//     alert("both are same try again");
//   }

// while (
//   (computerGuess === arr[0] && a === "water") ||
//   (computerGuess === arr[1] && a === "snake") ||
//   (computerGuess === arr[2] && a === "gun") ||
//   (computerGuess === arr[0] && a === "snake") ||
//   (computerGuess === arr[2] && a === "water") ||
//   (computerGuess === arr[1] && a === "gun")
// ) {
//     const random = Math.floor(Math.random() * 3);
//     computerGuess = arr[random];
//   a = prompt("enter any one  word from snake ,water , gun ");

//   if (computerGuess === arr[0] && a === "water") {
//     alert(" you lost ! try again !!! ");
//   } else if (computerGuess === arr[1] && a === "water") {
//     alert("congratulations you are winner!!!");
//   } else if (computerGuess === arr[1] && a === "snake") {
//     alert(" you lost ! try again !!! ");
//   } else if (computerGuess === arr[2] && a === "snake") {
//     alert("congratulations you are winner!!!");
//   } else if (computerGuess === arr[0] && a === "gun") {
//     alert("congratulations you are winner!!!");
//   } else if (computerGuess === arr[2] && a === "gun") {
//     alert(" you lost ! try again !!! ");
//   } else {
//     alert("both are same try again");
//   }
// }

const arr = ["snake", "water", "gun"];
let computerGuess = arr[Math.floor(Math.random() * 3)];

let a = prompt("Enter any one word from snake, water, gun");

while (true) {
  if (computerGuess === a) {
    alert("Both are the same. Try again.");
  } else if (
    (computerGuess === "water" && a === "snake") ||
    (computerGuess === "snake" && a === "gun") ||
    (computerGuess === "gun" && a === "water")
  ) {
    alert("You lost! Try again!");
  } else if (a == "") {
    alert("please enter the value! Try again!");
  } else if (a !== "snake" || a !== "water" || a !== "gun") {
    alert("please enter the value! Try again!");
  } else {
    alert("Congratulations! You are the winner!");
    break;
  }

  computerGuess = arr[Math.floor(Math.random() * 3)];
  a = prompt("Enter any one word from snake, water, gun");
}
