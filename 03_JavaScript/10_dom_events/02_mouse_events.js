let btns = document.querySelectorAll("button");

function sayHello() {
    alert("hello");
}
for (btn of btns) {
    btn.onclick = sayHello;
    btn.onmouseenter = function () {
        console.log("you entered a button");
    };
    console.dir(btn)
}