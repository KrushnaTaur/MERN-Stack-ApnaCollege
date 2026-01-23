[2, 4, 6].every((el) => el%2 == 0);

[2, 4, 6, 8].every((el) => el%2 == 0);

[2, 4, 6, 8, 1].every((el) => el%2 == 0);

[2, 4, 6, 8, 1].every((el) => el%2 != 0);


[2, 4, 6, 8, 1].some((el) => (el%2 == 0));


let nums = [10, 20, 30, 40];
let ans = nums.every((el) => el % 10 == 0);
console.log(ans);