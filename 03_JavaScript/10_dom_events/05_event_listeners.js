let btns = document.querySelectorAll("button");

for (btn of btns) {
    btn.addEventListner("click", sayHello);
    btn.addEventListner("click", sayName);

    btn.addEventListner("dbclick", function () {
        console.log("you double clicked");
    });
}

function sayHello() {
    alert("Hello!");
}

function sayName() {
    alert("apna clg");
}