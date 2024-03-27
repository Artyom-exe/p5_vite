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

    let width = 800;
    let height = 800;

    p.rectMode(p.CENTER);
    p.rect(width/2, height/2, width/2);

    let x = width/2;
    let y = height/2;
    let cote = width/2;
    let midCote = cote/2;

    p.line(x,y - midCote,x, y + midCote);
    p.line(x - midCote, y, x + midCote, y);
    p.line(x-midCote, y+midCote, x+midCote, y-midCote);
    p.line(x + midCote, y + midCote, y - midCote, x - midCote);
    
};

}, document.querySelector("#canvas"));