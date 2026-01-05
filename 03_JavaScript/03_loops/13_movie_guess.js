const favMovie = "avatar";

let guess = prompt("guess fav movie or type quit");

while(guess != favMovie)  {
    
    if(guess == "quit") {
        console.log("you quit");
        break;
    }
    
    guess = prompt("wrong guess. please try again");
}

if(guess == favMovie) {
    console.log("congrats!");
}