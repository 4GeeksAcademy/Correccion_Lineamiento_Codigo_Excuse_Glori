/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  //let laexcusa = (document.getElementById("excusa").innerHTML = generarExcusa());
  document.getElementById("excusa").innerText = generarExcusa();
};

let generarExcusa = function() {
  let who = [
    "Una abuela",
    "Mi perro",
    "El vecino",
    "Un Alien",
    "El chofer del bus"
  ];
  let action = ["se comió", "robó", "mordió", "rompió", "insultó"];
  let what = ["mi proyecto", "mi tarea", "mi maqueta", "el arroz con leche"];
  let when = ["ayer", "mañana", "en la madrugada", "anoche", "hace 2 días"];

  let quien = [Math.floor(Math.random() * who.length)];
  let accion = [Math.floor(Math.random() * action.length)];
  let que = [Math.floor(Math.random() * what.length)];
  let cuando = Math.floor(Math.random() * when.length);

  return (
    who[quien] + " " + action[accion] + " " + what[que] + " " + when[cuando]
  );
};
