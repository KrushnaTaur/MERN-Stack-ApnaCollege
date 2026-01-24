//selecting by id
document.getElementById("mainImg");

let imgObj = document.getElementById("mainImg");

imgObj;
console.dir(imgObj);
imgObj.src;
imgObj.id;

imgObj.src = "assets\creation_1.png";

document.getElementById("description");
console.dir(document.getElementById("description"));


//by class name
document.getElementsByClassName("oldImg");
document.getElementsByClassName("oldImg")[0];
document.getElementsByClassName("oldImg")[1];

let smallImages = document.getElementsByClassName("oldImg");

for (let i=0; i<smallImages; i++) {
    smallImages[i].src = "assets/spiderman_img.png";
    console.log(`value of img no. ${i} is changed.`);
}


//by tag name
document.getElementsByTagName("p");
document.getElementsByTagName("p")[1].innerText = "abc";