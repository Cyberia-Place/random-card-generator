/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

// CREAR CARTA
function generateCard() {
  let symbols = ["♦", "♥", "♠", "♣"];
  let letters = [
    "A",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K"
  ];

  let symbol = symbols[Math.floor(Math.random() * symbols.length)];
  let letter = letters[Math.floor(Math.random() * letters.length)];

  document.querySelector("#symbol").innerHTML = `<p>${symbol}</p>`;
  document.querySelector("#letter").innerHTML = `<p>${letter}</p>`;
  document.querySelector("#symbol1").innerHTML = `<p>${symbol}</p>`;

  if (symbol == "♦" || symbol == "♥") {
    document.getElementById("symbol").style.color = "red";
    document.getElementById("letter").style.color = "red";
    document.getElementById("symbol1").style.color = "red";
  } else {
    document.getElementById("symbol").style.color = "black";
    document.getElementById("letter").style.color = "black";
    document.getElementById("symbol1").style.color = "black";
  }
}

// BOTON PARA REGENERAR LA CARTA
var btn = document.getElementsByClassName("btn");
btn[0].addEventListener("click", generateCard);

// GENERAR UNA CARTA AUTOMATICAMENTE AL PRINCIPIO
window.onload = generateCard();
