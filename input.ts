namespace input{
    //% block
    export function stringinput(tip:string = ""):string{
        let ing = true, code = 97, _str = "";
        basic.showString(tip, 100)
        
        input.onButtonPressed(Button.A, function() {
            if(code > 32){
                code -= 1
                led.stopAnimation()
            }
        })

        input.onButtonPressed(Button.B, function() {
            
            if (code < 129) {
                code += 1
                led.stopAnimation()
            }
        })

        input.onButtonPressed(Button.AB, function() {
            if (code < 127) {
                _str = _str + String.fromCharCode(code)

                led.stopAnimation()
            }
            else if(code < 128){
                ing = false

                basic.clearScreen()
                
            }
            else if(code < 129){
                _str = _str.substr(0, (_str.length - 1))
            }
            else{

                basic.clearScreen()
                basic.showString(_str, 100)
            }
        })
    
        while (true) {

            if (ing) {
                if (code <= 126) {
                    basic.showString(String.fromCharCode(code))

                }
                else if(code <= 127){

                    basic.showIcon(IconNames.Yes)
                }
                else if(code <= 128){
                    basic.showIcon(IconNames.No)
                }
                else{

                    basic.showLeds(`
                    . . . . .
                    . # # # .
                    # . # . #
                    . # # # .
                    . . . . .
                    `)
                }
            }
            else{
                break
            }
        }
        return _str;
    }
    //% block
    export function int_input(tip:string = "", big:number = 0, small:number = 1, _default:number = 0):number{
        let _small:number, _big:number, ing = true, _num = _default;
        if(big < small){
            _small = -Infinity
            _big = Infinity
        }
        else{
            _small = small;
            _big = big;
        }

        basic.showString(tip, 100)

        
        input.onButtonPressed(Button.A, function() {
            if(_num > _small){
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
        input.onButtonPressed(Button.AB, function() {
            ing = false;
        })
        
        while (true){
            if(ing){
                basic.showNumber(_num, 100)
            }
            else{
                basic.clearScreen()
                break;
            }
        }

        return _num;
    }
    //% block
    export function choose(_list:string[], tip = ""):string{
        let num = 0, ing = true, _big = _list.length;
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
                basic.showString(_list[num])
            }
            else {
                basic.clearScreen()
                break;
            }
        }
        return _list[num];
    }
}
