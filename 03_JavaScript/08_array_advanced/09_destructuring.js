let names = ["krish", "ravi", "rohit", "ketan"];
let [winner, runnerUp, ...others] = names;


const stud = {
    name: "karan",
    age: 15,
    class: 10,
    username: "karan16",
    password: "pass123"
};

let {username: user, password: key, city = "Beed"} = stud;