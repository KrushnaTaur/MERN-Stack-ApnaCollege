let nums = [2, 3, 4, 1];

let finalVal = nums.reduce((res, el) => res + el);

console.log(finalVal);


function getMin(nums) {
    let min = nums.reduce((min,el) => {
        if (min < el) {
            return min;
        } else {
            return el;
        }
    });
    return min;
}