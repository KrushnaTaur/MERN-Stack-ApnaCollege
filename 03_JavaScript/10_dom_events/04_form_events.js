let form = document.querySelector("Form");

form.addEventListener("submit", function (event){
    event.preventDefault();
    alert("form submitted");
});