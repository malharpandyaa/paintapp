let colors = ['red', 'orange', 'yellow', 'green', 'cyan', 'blue', 'magenta', 'brown', 'white', 'black'];
let selectedColor = 'black';

function setup() {
  createCanvas(700, 500);
  background(240);
}

function draw() {
  drawPalette();
  strokeWeight(1);
  if (mouseIsPressed) {
    if (mouseX > 25) {
      stroke(selectedColor);
      strokeWeight(10);
      line(mouseX, mouseY, pmouseX, pmouseY);
      strokeWeight(1);
    } 
    else {
      for (let i = 0; i < colors.length; i++) {
        if (mouseY > i * 25 && mouseY < (i + 1) * 25) {
          selectedColor = colors[i];
          break;
        }
      }
    }
  }
}

function drawPalette() {
  stroke('white');
  for (let i = 0; i < colors.length; i++) {
    fill(colors[i]);
    rect(0, i * 25, 25, 25);
  }
}

