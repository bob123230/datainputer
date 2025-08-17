//% color="purple" block="Input data"
namespace inputdata {
    //% block="inputString tip $tip"
    //tip.defl=""
    export function stringinput(tip = ""): string {
        let ing = true, code = 97, _str = "";
        basic.showString(tip, 100)

        input.onButtonPressed(Button.A, function () {
            if (code > 32) {
                code -= 1
                led.stopAnimation()
            }
        })

        input.onButtonPressed(Button.B, function () {

            if (code < 129) {
                code += 1
                led.stopAnimation()
            }
        })

        input.onButtonPressed(Button.AB, function () {
            if (code < 127) {
                _str = _str + String.fromCharCode(code)

                led.stopAnimation()
            }
            else if (code < 128) {
                ing = false

                basic.clearScreen()

            }
            else if (code < 129) {
                _str = _str.substr(0, (_str.length - 1))
            }
            else {

                basic.clearScreen()
                basic.showString(_str, 100)
            }
        })

        while (true) {

            if (ing) {
                if (code <= 126) {
                    basic.showString(String.fromCharCode(code))

                }
                else if (code <= 127) {

                    basic.showIcon(IconNames.Yes)
                }
                else if (code <= 128) {
                    basic.showIcon(IconNames.No)
                }
                else {

                    basic.showLeds(`
                    . . . . .
                    . # # # .
                    # . # . #
                    . # # # .
                    . . . . .
                    `)
                }
            }
            else {
                led.stopAnimation()
                basic.clearScreen()
                break
            }
            basic.pause(100)
        }
        return _str;
    }
    //% block="inputInteger tip $tip max $big min $small default $_default"
    //% tip.defl=""
    //% big.defl=0
    //% small.defl=-1
    //% _default.defl=0
    
    export function int_input(tip = "", big = 0, small = 1, _default = 0): number {
        let _small: number, _big: number, ing = true, _num = _default;
        if (big < small) {
            _small = -Infinity
            _big = Infinity
        }
        else {
            _small = small;
            _big = big;
        }

        basic.showString(tip, 100)


        input.onButtonPressed(Button.A, function () {
            if (_num > _small) {
                _num -= 1;

                led.stopAnimation()
            }
        })
        input.onButtonPressed(Button.B, function () {
            if (_num < _big) {
                _num += 1;

                led.stopAnimation()
            }
        })
        input.onButtonPressed(Button.AB, function () {
            ing = false;
        })

        while (true) {
            if (ing) {
                basic.showNumber(_num, 100)
            }
            else {
                led.stopAnimation()
                basic.clearScreen()
                break;
            }
            basic.pause(100)
        }

        return _num;
    }
    //% block="chooseFromList $_list tip $tip"
    //% _tip.defl=""
    export function choose(_list: string[], tip = ""): string {
        let num = 0, ing = true, _big = _list.length - 1;
        basic.showString(tip, 100)

        input.onButtonPressed(Button.A, function () {
            if (num > 0) {
                num -= 1;

                led.stopAnimation()
            }
        })
        input.onButtonPressed(Button.B, function () {
            if (num < _big) {
                num += 1;

                led.stopAnimation()
            }
        })
        input.onButtonPressed(Button.AB, function () {
            ing = false;
        })

        while (true) {
            if (ing) {
                basic.showString(_list[num], 100)
            }
            else {
                led.stopAnimation()
                basic.clearScreen()
                break;
            }
            basic.pause(100)
        }
        return _list[num];
    }
    //% block="input all numbers tip $tip"
    //tip.defl=""
    export function numberinput(tip = ""): number {
        let code_list = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", ".", "-"]
        let ing = true, code = 0, _str = "";
        basic.showString(tip, 100)

        input.onButtonPressed(Button.A, function () {
            if (code > 0) {
                code -= 1
                led.stopAnimation()
            }
        })

        input.onButtonPressed(Button.B, function () {

            if (code < 14) {
                code += 1
                led.stopAnimation()
            }
        })

        input.onButtonPressed(Button.AB, function () {
            if (code < 12) {
                _str = _str + code_list[code]

                led.stopAnimation()
            }
            else if (code < 13) {
                ing = false

                basic.clearScreen()

            }
            else if (code < 14) {
                _str = ""
            }
            else {
                basic.clearScreen()
                basic.showString(_str)
            }
        })
        while (true) {

            if (ing) {
                if (code <= 11) {
                    basic.showString(code_list[code])

                }
                else if (code <= 12) {

                    basic.showIcon(IconNames.Yes)
                }
                else if (code <= 13) {
                    basic.showString("C")
                }
                else {

                    basic.showLeds(`
                    . . . . .
                    . # # # .
                    # . # . #
                    . # # # .
                    . . . . .
                    `)
                }
            }
            else {
                led.stopAnimation()
                basic.clearScreen()
                break
            }
            basic.pause(100)
        }
        return parseFloat(_str);
    }
}
