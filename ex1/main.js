import "/style.css";
import { renderNav } from "/components/nav.js"
import p5 from "p5";

const app = document.querySelector("#app");

app.innerHTML=`
  ${renderNav()}

  <h1>Exercice 1</h1>

`;

new p5(p => {
  p.setup = () => {
    p.createCanvas(800, 800);
    p.background(255);
  };

  p.draw = () => {
let x = 100;
let y = 200;
let cote = 150;

p.rect(x, y, cote);

let x2 = 600;
let y2 = 50;
let x3 = 550;
let y3 = 200;
let x4 = 650;
let y4 = 200;

p.triangle(x2, y2, x3, y3, x4, y4);
  

p.line(100, 500, 150, 600);

};
}, document.querySelector("#canvas"));