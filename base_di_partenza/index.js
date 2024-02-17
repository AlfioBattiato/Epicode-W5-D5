const nav = document.querySelector("nav");
const emme = document.querySelectorAll("#emme");

function scrollHandler() {
  if (window.scrollY > 350) {
    nav.style.backgroundColor = "white";
  } else {
    nav.style.backgroundColor = "#ffc017";
  }
}

window.addEventListener("scroll", scrollHandler);
/////////////////////////////////////////////////////////////////
//funzione m random/////////

setInterval(() => {
  let randomNumber = Math.floor(Math.random() * emme[0].children.length);
  if (emme[0].children[randomNumber].getAttribute("opacity") === "1") {
    emme[0].children[randomNumber].setAttribute("opacity", 0);
  } else {
    emme[0].children[randomNumber].setAttribute("opacity", 1);
  }
}, 50);
