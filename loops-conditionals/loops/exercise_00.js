/*
    1. Create a for loop that will print out all the even numbers between 10 and 40.
    
    2. Create a for loop that will print out all the odd numbers between 10 and 40.
*/

let minNumber = 10;
let maxNumber = 40;

for (let i = minNumber; i <= maxNumber; i++) {
  if (i % 2 === 0) {
    console.log(i);
  }
}

for (let i = minNumber; i <= maxNumber; i++) {
  if (i % 2 !== 0) {
    console.log(i);
  }
}
