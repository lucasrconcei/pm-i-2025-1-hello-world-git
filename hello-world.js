let elNome = document.getElementById("nome");
let elMessage = document.getElementById("message");

document.addEventListener("DOMContentLoaded",function () {

    elNome.addEventListener("keyup", function (e) {
        setMessage();
    })
})

function setMessage() {

    if (elNome.value == "") {
        elMessage.innerText = "";
        return;
    }

    elMessage.innerText = `Hello World: ${elNome.value}!`;
}