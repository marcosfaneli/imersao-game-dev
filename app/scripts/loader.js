
function preload() {
  imagemCenario = loadImage('images/cenario/floresta.png');
  imagemInicial = loadImage('images/cenario/telaInicial.png');
  imagemGameOver = loadImage('images/assets/game-over.png');
  imagemPersonagem = loadImage('images/personagem/correndo.png');
  imagemInimigo = loadImage('images/inimigo/gotinha.png');
  imagemInimigoVoador = loadImage('images/inimigo/gotinha-voadora.png');
  imagemInimigoGrande = loadImage('images/inimigo/troll.png');
  imagemVida = loadImage('images/assets/coracao.png');

  somDoJogo = loadSound('sounds/trilha_jogo.mp3');
  somDoPulo = loadSound('sounds/somPulo.mp3');

  fontGame = loadFont('fonts/fonteTelaInicial.otf');

  config = loadJSON('maps/config.json')
}