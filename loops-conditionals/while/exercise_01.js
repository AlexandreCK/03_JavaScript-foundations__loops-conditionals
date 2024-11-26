/*
    1. Create a while loop that will print out all the even numbers between 10 and 40.

    2. Create a while loop that will print out all the odd numbers between 10 and 40.
*/

let counter = 0;
let evenNums = [];
let oddNums = [];

while (counter < 40) {
  counter++;
  if (counter % 2 === 0) {
    evenNums.push(counter);
  }

  if (counter % 2 !== 0) {
    oddNums.push(counter);
  }
}

console.log(
  "Even numbers: " + evenNums.join(", ") + " Odd numbers: " + oddNums.join(", ")
);
