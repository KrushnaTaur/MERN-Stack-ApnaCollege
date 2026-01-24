let para = document.querySelector('p');

para.innerText;
para.innerHTML;
para.textContent;

para.innerText = "Hi, I am Krish";

para.innerHTML = "Hi, I am <b>Krish</b>";


let heading = document.querySelector('h1');
heading.innerText;

heading.innerHTML = "<u>Spider Man</u>";
heading.innerHTML = `<u>${heading.innerText}</u>`;