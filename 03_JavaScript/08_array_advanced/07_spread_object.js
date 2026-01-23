const data = {
    name: "Krish",
    pass: "pass"
};

const dataCopy = { ...data };

dataCopy = { ...data, id: 123, country: "ind" };



let arr = [1, 2, 3, 4];
const obj = {...arr};

let obj2 = {..."hello"};