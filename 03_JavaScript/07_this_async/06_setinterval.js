console.log("hii");

let id = setInterval(() => {
    console.log("Apna College");
}, 2000); //running continuasly

console.log(id);

clearInterval(id);  //for stopping


setInterval(() => {
    console.log("Hellow");
}, 2000);

setTimeout(() => {
    clearInterval(id);
}, 10000)