let modal = document.querySelectorAll("div[class=modal")[0];
let btn = document.querySelectorAll("button[class=button]")[0];  
let okey = document.querySelectorAll("div[class=button__okey]")[0];
let cancel = document.querySelectorAll("div[class=button__cancel]")[0];

btn.onclick = function () {
    modal.style.display = "flex";
}

okey.onclick = function () {
    modal.style.display = "none";
}

cancel.onclick = function () {
    modal.style.display = "none";
}

window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
