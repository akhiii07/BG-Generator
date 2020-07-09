var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");

function setGradient(){
    body.style.background =                //Targetin the linear gradient value, with the help of input form
    "linear-gradient(to right, "
    + color1.value
    + ", "
    + color2.value
    + ")";

    //css.textContent = body.style.background + ";";
    css.innerHTML = "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";
}

color1.addEventListener("input", setGradient); //Adding event listener to the color1
 
color2.addEventListener("input", setGradient); //Adding event listener to the color2
 
