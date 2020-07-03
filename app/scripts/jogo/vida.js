class Vida {
    constructor(maximo, inicial) {
        this.maximo = maximo;
        this.inicial = inicial;

        this.vidas = inicial;

        this.largura = 25;
        this.altura = 25;
        this.xInicial = 20;
        this.y = 20;
    }

    draw() {
        for (let i = 0; i < this.vidas; i++) {
            const margem = i * 10;
            const posicao = this.xInicial * (i + 1);

            image(
                imagemVida, 
                posicao + margem, 
                this.y, 
                this.largura, 
                this.altura
            )
        }
    }

    ganhar(){
        if(this.vidas <= this.maximo){
            this.vidas++;
        }
    }

    perder(){
        this.vidas--;
    }
}