let heroes = [
    ["ironman", "spiderman", "thor"],
    ["superman", "wonder woman", "flash"]
];

for(let i=0; i<heroes.length; i++) {
    console.log(i, heroes[i]);
    for(let j=0; j<heroes[i]; j++) {
        console.log(`j=${j}, ${heroes[i][j]}`)
    }
}

let student = [
    ["krushna", 90], ["gaurav", 90], ["rohit", 90]
];

for(let i=0; i<student.length; i++) {
    for(let j=0; j<student[i].length; j++) {
        console.log(student[i][j]);
    }
}