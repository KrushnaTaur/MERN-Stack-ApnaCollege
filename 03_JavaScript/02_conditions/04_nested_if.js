let marks = 50;

if (marks >= 33) {
    console.log("Pass");
    if (marks  >= 80) {
        console.log("Grade : O");
    } else {
        console.log("Grade : A");
    }
} else {
    console.log("Fail");
}



let a=5;
let b=18;
let c=13;

if(a>b) {
    if(a>c){
        console.log(a,"islargest");
    } else {
        console.log(c,"islargest");
    }
} else {
    if(b>c) {
        console.log(b,"islargest");

    } else {
        console.log(c,"islargest");
    }
}