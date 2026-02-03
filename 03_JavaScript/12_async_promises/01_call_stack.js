function hello() {
    console.log("inside hello");
    console.log("hello!");
}

function demo() {
    console.log("inside demo , calling hello");
    hello();
}

console.log("calling demo");;
demo();
console.log("done & bye!");



function one() {
    return 1;
}

function two() {
    return one() + one();
}

function three() {
    let ans = two() + one();
    console.log(ans);
}

three();