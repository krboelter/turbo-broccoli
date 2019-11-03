let broccoli = document.querySelector("#app");
let myInput = document.querySelector("#newElement")


function myFunction() {
    createHeader(broccoli, myInput.value)

    myInput.value = ""
}

function createHeader(pointer, text) {
    const header = document.createElement("h2");
    header.textContent = text;
    header.style.border = "2px solid red";
    header.style.width = "300px";
    header.style.margin = "0 auto";
    header.style.textAlign = "center";

    pointer.appendChild(header);
}

