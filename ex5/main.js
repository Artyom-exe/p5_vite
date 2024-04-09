import "/style.css";
import { renderNav } from "/components/nav.js"
import p5 from "p5";

const app = document.querySelector("#app");

app.innerHTML=`
  ${renderNav()}

  <h1>Exercice 5</h1>

`;

new p5(p => {
  p.setup = () => {
    p.createCanvas(800, 800);
    p.background(255);
  };

  p.draw = () => {

    let caseParLigne = 8;
    let x = 0;
    let y = -100;
    let c = (caseParLigne/caseParLigne)*100;

    for (let i = 0; i < caseParLigne; i++) {

      y += c;

      for (let j = 0; j < caseParLigne; j++) {

        if ((i+j)%2 === 0) {
          p.fill(0,0,0)
        }
        else {
          p.fill(255,255,255)
        }

        p.rect(x, y, c);
        x += c;
      }
      x = 0
      };
};

}, document.querySelector("#canvas"));