class Personagem extends Animacao {
  constructor(
    matriz,
    imagem,
    x,
    largura,
    altura,
    larguraSprite,
    alturaSprite) {
    super(
      matriz,
      imagem,
      x,
      largura,
      altura,
      larguraSprite,
      alturaSprite);

    this.yInicial = height - this.altura;
    this.y = this.yInicial;

    this.gravidade = 3;
    this.velocidadePulo = 0;

    this.precisao = .7;

  }

  pula() {
    this.velocidadePulo = - 50;
  }

  aplicaGravidade() {
    this.y = this.y + this.velocidadePulo;
    this.velocidadePulo = this.velocidadePulo + this.gravidade;

    if (this.y > this.yInicial) {
      this.y = this.yInicial;
    }
  }

  estaColidindo(inimigo){
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