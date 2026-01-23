let num = [1, 2, 3, 4];
let double = num.map((el) => {
    return el * 2;
});


let students = [
    {
        name: "krish",
        marks: 91
    },
    {
        name: "rohit",
        marks: 83
    },
    {
        name: "gaurav",
        marks: 87
    }
];

let cgpa = students.map((el) => {
    return el.marks / 10;
});



let nums = [1, 2, 3, 4, 7, 8, 2, 9, 10, 12, 11];
let ans = nums.filter((el) => {
    return el & 2 == 0;
});