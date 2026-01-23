let arr = [1, 2, 3, 4, 7, 8, 2, 9];

let max = arr.reduce((max, el) => {
    if (max < el) {
        return el;
    } else {
        return max;
    }
});
console.log(max);