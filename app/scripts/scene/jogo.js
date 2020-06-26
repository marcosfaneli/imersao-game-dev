class Jogo {
    constructor() {
        this.inimigoAtual = 0;
    }

    _loadEnimy() {
        inimigos = [];

        const inimigo = new Inimigo(matrizInimigo, imagemInimigo, width - 52, 30, 52, 52, 104, 104, 10, 0);
        const inimigoVoador = new Inimigo(matrizInimigoVoador, imagemInimigoVoador, width - 52, 200, 100, 75, 200, 150, 10, 0);
        const inimigoGrande = new Inimigo(matrizInimigoGrande, imagemInimigoGrande, width, 0, 200, 200, 400, 400, 10, 0)

        inimigos.push(inimigo)
        inimigos.push(inimigoGrande)
        inimigos.push(inimigoVoador)
    }

    setup() {
        cenario = new Cenario(imagemCenario, 3);
        pontuacao = new Pontuacao()

        personagem = new Personagem(matrizPersonagem, imagemPersonagem, 0, 30, 110, 135, 220, 270);

        this._loadEnimy()

        // somDoJogo.loop();
    }

    onKeyPress(key) {
        if (key === 'ArrowUp') {
            personagem.pula()
            somDoPulo.play()
        }

        if (key === 'Enter') {
            this._resetGame();
        }
    }

    _resetGame() {
        this._loadEnimy();
        pontuacao.reset();
        loop();
    }

    _gameOver() {
        image(imagemGameOver, width / 2 - 200, height / 3)

        textFont(fontGame);
        textSize(36);
        textAlign(CENTER);
        text('Press Enter to restart', width / 2, height / 5)
        noLoop();
    }

    draw() {
        cenario.exibe();
        cenario.move();

        pontuacao.exibe();
        pontuacao.adicionarPontos()

        personagem.exibe();
        personagem.aplicaGravidade();

        const inimigo = inimigos[this.inimigoAtual];
        const inimigoVisivel = inimigo.x < -inimigo.largura;

        inimigo.exibe();
        inimigo.move();

        if (inimigoVisivel) {
            this.inimigoAtual++;
            if (this.inimigoAtual > inimigos.length - 1) {
                this.inimigoAtual = 0;
            }
            inimigo.velocidade = parseInt(random(5, 15));
        }

        if (personagem.estaColidindo(inimigo)) {
            this._gameOver()
        }
    }
}