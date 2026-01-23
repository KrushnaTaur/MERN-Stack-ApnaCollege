function sum(...args) {
    for (let i = 0; i < args.length; i++) {
        console.log("you gave us: ", args[i]);
    }
}
sum(1, 2, 3);


function add(...args) {
    return args.reduce((add, el) => add + el);
}
add(1, 2, 3, 4);


function min(msg, ...args) {
    console.log(msg);
    return args.reduce((min, el) => {
        if (min > el) {
            return el;
        } else {
            return min;
        }
    });
}
min("hello", 2, 4, 1, 5);