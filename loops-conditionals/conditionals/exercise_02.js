/* 
   Spot the bug 🐞
   Should print: "Most places consider you an adult."... but it doesn't, why?

   Add a comment explaining what is happenning and how to fix it
*/

const age = 20;

function checkAge() {
  if (age < 3) {
    console.log("You're just a baby!");
    return;
  }
  if (age >= 3) {
    console.log("You are in elementary school, kid.");
    return;
  }
  if (age >= 13) {
    console.log("Nice, you're a teenager!");
    return;
  }
  if (age >= 18) {
    console.log("Most places consider you an adult.");
    return;
  }

  console.log("What? How did this happen!?");
  return;
}

checkAge();


// JS checks in descending order the "if" statements, since the age >= 3 one fulfills the condition, it executes it.
// The "return" stops it from checking the next ones. 
// It should be done from bigger to smaller and also with "if else" statements.

let newAge = 24;

function newCheckAge() {
  if (newAge >= 18) {
    console.log("Most places consider you an adult.");
  } else if (newAge >= 13) {
    console.log("Nice, you're a teenager!");
  } else if (newAge >= 3) {
    console.log("You are in elementary school, kid.");
  } else if (newAge < 3) {
    console.log("You're just a baby!");
  } else {
    console.log("What? How did this happen!?");
  }
}

newCheckAge();
