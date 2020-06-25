class Personagem extends Animacao {
  constructor(
    matriz,
    imagem,
    x,
    variacaoY,
    largura,
    altura,
    larguraSprite,
    alturaSprite) {
    super(
      matriz,
      imagem,
      x,
      variacaoY,
      largura,
      altura,
      larguraSprite,
      alturaSprite);

    this.yInicial = height - this.altura - this.variacaoY;
    this.y = this.yInicial;

    this.gravidade = 5;
    this.velocidadePulo = 0;

    this.alturaDoPulo = -50;
    this.pulos = 0;

    this.precisao = .7;

  }

  pula() {
    if (this.pulos < 3) {
      this.velocidadePulo = this.alturaDoPulo;
      this.pulos++;
    }
  }

  aplicaGravidade() {
    this.y = this.y + this.velocidadePulo;
    this.velocidadePulo = this.velocidadePulo + this.gravidade;

    if (this.y > this.yInicial) {
      this.y = this.yInicial;
      this.pulos = 0;
    }
  }

  estaColidindo(inimigo) {
    const colisao = collideRectRect(
      this.x,
      this.y,
      this.largura * this.precisao,
      this.altura * this.precisao,
      inimigo.x,
      inimigo.y,
      inimigo.largura * this.precisao,
      inimigo.altura * this.precisao,
    )

    return colisao;
  }
}