/*
The “Coin Flip” Game Redux

In this part of the assignment you will explore what you’ve learned so far about variables, for loops, conditionals, operators, math, and more to create a different version of the “coin flip game”.

To complete the game follow the steps outlined below:

Begin your application by declaring a variable called coinFlip. Do not assign the variable a number just yet.
Create a for loop that loops a certain amount of times. The amount of times that the for loop executes will be collected from the user via a prompt.
Within the for loop assign a randomly generated number to You will have to use the same Math formula that you used in the previous assignment to get this number.
Use a conditional statement to check the result of the coin flip. If it’s 0, write out “Heads” into the console window. If it’s 1, write out “Tails” into the console window.

*/


let coinFlip;

let userInput = parseInt(prompt("How many times do you want to flip the coin?"));

for (let i = 0; i < userInput; i++) {
    coinFlip = Math.round(Math.random());
    if (coinFlip === 0) {
        console.log("Heads");
      } else {
        console.log("Tails");
      }
}
