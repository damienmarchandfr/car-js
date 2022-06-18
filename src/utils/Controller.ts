// https://www.toptal.com/developers/keycode
export class Controller {
    private keyCodes = {
        UP: 'ArrowUp',
        DOWN: 'ArrowDown',
        RIGHT: 'ArrowRight',
        LEFT: 'ArrowLeft'
    }

    public actions = {
        UP: false,
        DOWN: false,
        RIGHT: false,
        LEFT: false
    }

    constructor() {
        window.addEventListener('keydown', (event) => {
            const code = event.code

            switch (code) {
                case this.keyCodes.UP:
                    this.actions.UP = true
                    break;

                case this.keyCodes.DOWN:
                    this.actions.DOWN = true
                    break;


                case this.keyCodes.LEFT:
                    this.actions.LEFT = true
                    break;

                case this.keyCodes.RIGHT:
                    this.actions.RIGHT = true
                    break;

                default:
                    break;
            }
        })


        window.addEventListener('keyup', (event) => {
            const code = event.code

            switch (code) {
                case this.keyCodes.UP:
                    this.actions.UP = false
                    break;

                case this.keyCodes.DOWN:
                    this.actions.DOWN = false
                    break;


                case this.keyCodes.LEFT:
                    this.actions.LEFT = false
                    break;

                case this.keyCodes.RIGHT:
                    this.actions.RIGHT = false
                    break;

                default:
                    break;
            }
        })
    }
}