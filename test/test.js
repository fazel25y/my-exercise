var lights = document.querySelector("div");
lights.setAttribute("style", "border-radius:50px");
lights.classList.add("styleH3");
let lightRed = document.querySelector("h4");
lightRed.setAttribute("Id", "red");
lightRed.classList.add("number1");
console.log(lightRed);
let lightYellow = document.querySelector("h5");
lightYellow.setAttribute("id", "yellow");
lightYellow.classList.add("number1");
console.log(lightYellow);
let lightGreen = document.querySelector("h6");
lightGreen.setAttribute("id", "green");
lightGreen.classList.add("number3");
console.log(lightGreen);
// --------------------------------------------------------------------------
// -----2-----
lights.addEventListener("click", effect);
function effect() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(lightGreen.classList.remove("number3"));
      lightGreen.classList.add("number1");
    }, 4000);
    clearTimeout();
  });
}
lights.addEventListener("click", handlerLightYellow);
function handlerLightYellow() {
  return new Promise((resolve) => {
    setTimeout(() => {
      lightYellow.classList.remove("number1");

      resolve(lightYellow.classList.add("number4"));
    }, 2000);
  });
}

lights.addEventListener("click", handlerLightRed);
function handlerLightRed() {
  return new Promise((resolve) => {
    setTimeout(() => {
      lightYellow.classList.remove("number4");
      lightYellow.classList.add("number1");
      resolve(lightRed.classList.add("number2"));
    }, 2000);
  });
}
lights.addEventListener("click", allLights);
async function allLights() {
  await effect();
  await handlerLightYellow();
  await handlerLightRed();
}
allLights();
