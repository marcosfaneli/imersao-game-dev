function setup() {
  createCanvas(windowWidth, windowHeight);
  frameRate(40)

  initial = new Initial();

  jogo = new Jogo();
  jogo.setup();
  scenes = {
    game: jogo,
    initial: initial
  }
  buttonState = new ButtonState('Iniciar', width / 2, height / 2);
}

function keyPressed() {
  jogo.onKeyPress(key);
}

function draw() {
  scenes[actualScene].draw()
}