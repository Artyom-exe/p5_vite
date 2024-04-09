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
    let height = 1800;

    let x = width/2;
    let y = height/2;
    let longueur = 1000;
    let hauteur = 1400;
    let rouge = 255;
    let vert = 117;
    let bleu = 117;

    for (let i = 0; i < 6; i++) {

      p.fill(rouge, vert, bleu);
      p.stroke(rouge, vert, bleu);
      p.ellipse(x, y, longueur, hauteur);
        longueur-=80;
        hauteur-=80;

      if (i === 0) {
        rouge = 255;
        vert = 255;
        bleu = 117;
    } else if (i === 1) {
        rouge = 160;
        vert = 255;
        bleu = 117;
    } else if (i === 2) {
        rouge = 80;
        vert = 117;
        bleu = 255;
    } else if (i === 3) {
        rouge = 160;
        vert = 117;
        bleu = 255;
    } else if (i === 4) {
        rouge = 255;
        vert = 255;
        bleu = 255;
    }
  }

};

}, document.querySelector("#canvas"));