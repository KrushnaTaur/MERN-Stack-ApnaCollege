function hello() {
    console.log("Hello");
}
hello();
hello();

function printName() {
    console.log("Krushna");
    console.log("Taur");
}
printName();

function print1to5() {
    for(let i=1; i<=5; i++) {
        console.log(i);
    }
}
print1to5();

function isAdult() {
    let age = 20;
    if(age>=18) {
        console.log("Adult");
    } else {
        console.log("not adult")
    }
}
isAdult();

function rollDice() {
    let rand = Math.floor(Math.random() * 6) + 1;
    console.log(rand);
}
rollDice();