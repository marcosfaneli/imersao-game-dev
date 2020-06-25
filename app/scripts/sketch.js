let imagemCenario;
let imagemPersonagem;
let imagemInimigo;
let imagemTroll;
let imagemInimigoVoador;
let imagemGameOver;
let imagemStarter;
let imagemButtonStarter;

let cenario;
let personagem;

let somDoJogo;
let somDoPulo;

let inimigo;
let troll;
let inimigoVoador;

let pontuacao;
let playing = false;

const matrizInimigo = [
  [0, 0],
  [104, 0],
  [208, 0],
  [312, 0],
  [0, 104],
  [104, 104],
  [208, 104],
  [312, 104],
  [0, 208],
  [104, 208],
  [208, 208],
  [312, 208],
  [0, 312],
  [104, 312],
  [208, 312],
  [312, 312],
  [0, 418],
  [104, 418],
  [208, 418],
  [312, 418],
  [0, 522],
  [104, 522],
  [208, 522],
  [312, 522],
  [0, 626],
  [104, 626],
  [208, 626],
  [312, 626],
];


const matrizPersonagem = [
  [0, 0],
  [220, 0],
  [440, 0],
  [660, 0],
  [0, 270],
  [220, 270],
  [440, 270],
  [660, 270],
  [0, 540],
  [220, 540],
  [440, 540],
  [660, 540],
  [0, 810],
  [220, 810],
  [440, 810],
  [660, 810],
]

const matrizTroll = [
  [0, 0],
  [400, 0],
  [800, 0],
  [1200, 0],
  [1600, 0],
  [0, 400],
  [400, 400],
  [800, 400],
  [1200, 400],
  [1600, 400],
  [0, 800],
  [400, 800],
  [800, 800],
  [1200, 800],
  [1600, 800],
  [0, 1200],
  [400, 1200],
  [800, 1200],
  [1200, 1200],
  [1600, 1200],
  [0, 1600],
  [400, 1600],
  [800, 1600],
  [1200, 1600],
  [1600, 1600],
  [0, 2000],
  [400, 2000],
  [800, 2000],
]

const matrizInimigoVoador = [
  [0,0],
  [200, 0],
  [400, 0],
  [0, 150],
  [200, 150],
  [400, 150],
  [0, 300],
  [200, 300],
  [400, 300],
  [0, 450],
  [200, 450],
  [400, 450],
  [0, 600],
  [200, 600],
  [400, 600],
  [0, 750],
]

const inimigos = [];

function preload() {
  imagemCenario = loadImage('./images/cenario/floresta.png');
  imagemPersonagem = loadImage('./images/personagem/correndo.png');
  imagemInimigo = loadImage('./images/inimigo/gotinha.png');
  imagemInimigoVoador = loadImage('./images/inimigo/gotinha-voadora.png');
  imagemTroll = loadImage('./images/inimigo/troll.png');
  imagemGameOver = loadImage('./images/assets/game-over.png');
  imagemStarter = loadImage('./images/cenario/telaInicial.png');
  imagemButtonStarter = loadImage('./images/assets/start.png');

  somDoJogo = loadSound('./sounds/trilha_jogo.mp3');
  somDoPulo = loadSound('./sounds/somPulo.mp3');
}

function gerarInimigos(){
  inimigo = new Inimigo(matrizInimigo, imagemInimigo, width - 52, 30, 52, 52, 104, 104, 10, 200);
  inimigoVoador = new Inimigo(matrizInimigoVoador, imagemInimigoVoador, width - 52, 200, 100, 75, 200, 150, 10, 1500);
  troll = new Inimigo(matrizTroll, imagemTroll, width - 400, 4, 200, 200, 400, 400, 10, 2500);
  pontuacao = new Pontuacao();

  inimigos.push(inimigo);
  inimigos.push(inimigoVoador);
  inimigos.push(troll);
}

function restart(){

  cenario = new Cenario(imagemCenario, 6);

  personagem = new Personagem(matrizPersonagem,imagemPersonagem,0,30,110,135,220,270);
  
  gerarInimigos()

}

function setup() {
  createCanvas(windowWidth, windowHeight);

  restart();

  frameRate(40);

  // somDoJogo.loop();
}

function keyPressed() {

  if (key === 'ArrowUp' && playing) {
    personagem.pula();
    somDoPulo.play();

    return;
  }

  if (key === 'Enter') {
    restart();
    loop();
    playing = true;
  }

  if (key === 'Escape') {
    playing = false;
    loop();
  }
}

function run(){
  cenario.exibe();
  cenario.move();

  personagem.exibe();
  personagem.aplicaGravidade();

  pontuacao.exibe();
  pontuacao.adicionarPontos();

  inimigos.forEach(inimigo => {
    inimigo.exibe();
    inimigo.move();

    if (personagem.estaColidindo(inimigo)) {
      gameOver()
      noLoop();
    }

  });
}

function showStarting(){

  image(imagemStarter, 0, 0, width, height);
  image(imagemButtonStarter, (width / 2) - 430, (height / 2) - 300, 800, 600);

  textAlign(CENTER)
  fill('#000')
  textSize(72);
  text('GAMEDEV ALURA', (width / 2) + 2, (height / 4) + 2);

  textAlign(CENTER)
  fill('#fc0')
  textSize(72);
  text('GAMEDEV ALURA', width / 2, height / 4);

  textAlign(CENTER)
  fill('#f00')
  textSize(48);
  text('Press Enter', width / 2, (height / 4) * 3);
}

function gameOver(){

  image(imagemGameOver, (width / 2) - 200, height / 3);

  textAlign(CENTER)
  fill('#f00')
  textSize(48);
  text('Press Enter to restart', width / 2, (height / 4) * 3);

  textAlign(CENTER)
  fill('#7f0')
  textSize(36);
  text('Press Esc to starter', width / 2, (height / 5) * 4);
}

function draw() {
  if(playing){
    run();
  }else{
    showStarting();
  }
}
