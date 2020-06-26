class Initial {
    constructor() {
    }

    setup() {

    }

    onKeyPress(key) {
        if (key === 'Enter') {
            personagem.pula()
            somDoPulo.play()
        }
    }

    draw() {
        this._imagemFundo();
        this._texto();
        this._botao();
    }

    _imagemFundo() {
        image(imagemInicial, 0, 0, width, height);
    }

    _texto() {
        textFont(fontGame);
        textSize(50);
        textAlign(CENTER);
        text('As Aventuras de ', width / 2, height / 5)
        textSize(150);
        text('Hipsta', width / 2, (height / 5) * 2)
    }

    _botao() {
        buttonState.y = height / 7 * 5;
        buttonState.draw();
    }
}