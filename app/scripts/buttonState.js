class ButtonState {
    constructor(texto, x, y) {
        this.texto = texto;
        this.x = x;
        this.y = y;

        this.button = createButton(this.texto);
        this.button.mousePressed(() => this._modifyScene());
        this.button.addClass('button-start-screen');
    }

    draw() {
        this.button.position(this.x, this.y);
        this.button.center('horizontal');
    }

    _modifyScene() {
        this.button.remove();
        actualScene = 'game';
    }
}