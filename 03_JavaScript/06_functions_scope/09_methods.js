const calculator = {
    num: 55,
    add: function(a, b) {
        return a+b;
    },
    sub: function(a, b) {
        return a-b;
    },
    mul: function(a, b) {
        return a*b;
    }
};

calculator.num;
calculator.add(1, 2);


const calc = {
    add(a, b) {
        return a+b;
    },
    sub(a, b) {
        return a-b;
    },
    mul(a, b) {
        return a*b;
    }
};
calc.mul(1, 2);