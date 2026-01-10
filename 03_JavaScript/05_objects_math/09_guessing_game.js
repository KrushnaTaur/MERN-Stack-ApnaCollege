const max = prompt("enter the max number");

const random = Math.floor(Math.random() * max) + 1;

let guess = prompt("guess the number");

while(true) {
    if(guess == "quit") {
        console.log("user quit");
        break;
    }

    if(guess == random) {
        console.log("CONGRATS !!!, you are right!");
        break;
    } else if(guess < random) {
        guess = prompt("hint: too small, try agian");
    } else {
        guess = prompt("hint: too large, try agian");
    }
}