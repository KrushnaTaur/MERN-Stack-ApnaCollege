let fruits = ["apple", "banana", "cherry", "orange", "mango"];

for(fruit of fruits) {
    console.log(fruit);
}


for(char of "apnacollege") {
    console.log(char);
}


// nested for off
let heroes = [["superman", "batman", "wondar woman"], ["spiderman", "ironman", "thor"]];
for(list of heroes) {
    for(hero of list) {
        console.log(hero);
    }
}