import "/style.css";
import { renderNav } from "/components/nav.js"
import p5 from "p5";

const app = document.querySelector("#app");

app.innerHTML=`
  ${renderNav()}

  <h1>Exercice 3</h1>

`;

new p5(p => {
  p.setup = () => {
    p.createCanvas(800, 800);
    p.background(255);
  };

  p.draw = () => {

    p.rectMode(p.CENTER);
    p.stroke(0, 255, 0);
    p.fill(255, 0, 0);
    p.rect(400, 400, 400);

};

}, document.querySelector("#canvas"));