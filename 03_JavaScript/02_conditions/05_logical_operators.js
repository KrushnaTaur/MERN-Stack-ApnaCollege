let marks = 50;

if (marks >= 33 && marks >= 80) {
    console.log("Pass");
    console.log("A+");
}

if ((marks >= 33 && marks <= 80) || !false) {
    console.log("Pass");
}


let str = "apple";

if (str[0] === "a" && str.length > 3) {
    console.log("good string");
} else {
    console.log("not a good string");
}


let num = 12;

if ((num % 3 === 0) && ((num+1 === 15) || (num-1 === 11))){
    console.log("safe");
} else {
    console.log("unsafe");
}