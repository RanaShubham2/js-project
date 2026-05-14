




const prompt = require("prompt-sync")();
   // Number Guessing Game

let secretNumber = 7;

let guess;

let attempts = 0;


do {

    // Take user input
    guess = Number(prompt("Enter your guess number:"));

    // Increase attempts
    attempts++;

    // Check conditions
    if (guess > secretNumber) {

        console.log("Too High");

    }
    else if (guess < secretNumber) {

        console.log("Too Low");

    }
    else {

        console.log("Correct Number!");
    }

} while (guess !== secretNumber);


console.log("Total Attempts:", attempts);

