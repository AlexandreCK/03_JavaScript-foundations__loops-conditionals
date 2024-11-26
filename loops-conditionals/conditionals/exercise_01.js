/*
    Create a program that starts with a number variable.
    The program will return whether the variable is even or odd.

    Change the variable to test if it works for different cases.
    Print the result as follows: Number 8 is even | Number 9 is odd.

    HINT: The modulus operator ( % ) is your friend.
*/

let numberToCheck = -16;

if (typeof numberToCheck === "number") {
  if (numberToCheck % 2 === 0) {
    console.log("Number " + numberToCheck + " is even.");
  }
  if (numberToCheck % 2 !== 0) {
    console.log("Number " + numberToCheck + " is odd.");
  }
}

if (typeof numberToCheck !== "number") {
  console.log("The variable is not a number!");
}
