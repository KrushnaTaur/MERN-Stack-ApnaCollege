const student = {
    name: "krushna",
    age: 20,
    eng: 95,
    math: 98,
    phy: 92,
    getAvg() {
        console.log(this);
        let avg = (this.eng + this.math + this.phy)/3;
        console.log(`${this.name} got avg marks = ${avg}`);
    }
}

function getAvg() {
    console.log(this);
}