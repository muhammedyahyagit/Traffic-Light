let red = document.getElementById("red");
let yellow = document.getElementById("yellow");
let green = document.getElementById("green");
let changeLight = document.getElementById("changelight");
let light = 0;


changeLight.addEventListener("click", function () {
    if (light === 0) {
        light = 1;
        red.style.backgroundColor = "grey"
        yellow.style.backgroundColor = "yellow"
    } else if (light === 1) {
        red.style.backgroundColor = "grey"
        yellow.style.backgroundColor = "grey"
        green.style.backgroundColor = "green"
        light = 2;
    } else if (light === 2) {
        red.style.backgroundColor = "red"
        yellow.style.backgroundColor = "grey"
        green.style.backgroundColor = "grey"
        light = 0;
    }
})