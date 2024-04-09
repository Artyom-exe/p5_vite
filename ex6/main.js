import "/style.css";
import { renderNav } from "/components/nav.js"
import p5 from "p5";

const app = document.querySelector("#app");

app.innerHTML=`
  ${renderNav()}

  <h1>Exercice 6</h1>

`;

new p5(p => {
  p.setup = () => {
    p.createCanvas(800, 800);
    p.background(255);
  };

  p.draw = () => {

    let width = 800;
    let height = 800;

    let x = width/2;
    let y = height/2;
    let longueur = 400;
    let hauteur = 200;

    for (let i = 0; i < 5; i++) {

      p.ellipse(x, y, longueur, hauteur);

        longueur-=20;
        hauteur-=20;
    } 




};

}, document.querySelector("#canvas"));