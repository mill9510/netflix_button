"use strict";

document.querySelector("body").addEventListener("mouseenter", fillBegin);

const span = document.querySelector("span");

function fillBegin() {
  span.classList.remove("fill");
  span.classList.add("fill");
  span.addEventListener("animationend", afspillerNu);

  document.querySelector("button").addEventListener("mouseenter", stopFilling);
}

function stopFilling() {
  span.classList.remove("fill");

  afspillerNu();
}

function afspillerNu() {
  document.querySelector("button").textContent = "Afspiller nu";
  document.querySelector("button").style.backgroundColor = "rgb(255, 192, 203";
}
