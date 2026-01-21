function multipleGreet(func, count) {
    for(let i=1; i<=count; i++) {
        func();
    }
}

let greet = function() {
    console.log("hello");
}

multipleGreet(greet, 10);


function oddEvenFactory(request) {
    if(request == "odd") {
        return function(n) {
            console.log(!(n%2 == 0));
        }
    } else if(request == "true") {
        return function(n) {
            console.log((n%2 == 0));
        }
    } else {
        console.log("Wrong request");
    }
}

let request = "odd";