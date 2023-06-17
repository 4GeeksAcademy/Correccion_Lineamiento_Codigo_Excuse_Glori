/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  //Quité el comment extra que no tenía ninguna funcionalidad.
  document.getElementById("excusa").innerText = generarExcusa();
};

let generarExcusa = function() {
  let who = ["Una abuela","Mi perro","El vecino","Un Alien", "El chofer del bus"];
  let action = ["se comió", "robó", "mordió", "rompió", "insultó"];
  let what = ["mi proyecto", "mi tarea", "mi maqueta", "el arroz con leche"];
  let when = ["ayer", "mañana", "en la madrugada", "anoche", "hace 2 días"];

  let quienRandom = [Math.floor(Math.random() * who.length)]; //Le cambie los nombres a los arreglos, así se sabe que hacen, antes solo decía los mismos nombres pero en español.
  let accionRandom = [Math.floor(Math.random() * action.length)];
  let queRandom = [Math.floor(Math.random() * what.length)];
  let cuandoRandom = [Math.floor(Math.random() * when.length)]; //Le puse unos corchetes cuadrados que le hacian falta, y se vea igual que los demas.

  return (
    who[quienRandom] + " " + action[accionRandom] + " " + what[queRandom] + " " + when[cuandoRandom]
  );
};
