document.createElement('p');

let newP = document.createElement('p');
console.dir(newP);

newP.innerText = "hi, this is krish";
console.dir(newP);

let body = document.querySelector('body');
body.appendChild(newP);

let box = document.querySelector(".box");
box.appendChild(newP);

let btn = document.createElement('button');
console.dir(btn);
btn.innerText = "click";
box.appendChild(btn);

newP.append("this is new text");
newP.append(btn);
newP.append("do not click");

box.prepend(btn);