// 在此处测试；当此软件包作为插件使用时，将不会编译此软件包。

basic.showString("Test1:")
let i = input.stringinput("input a string:")
basic.showString("data:" + i)
basic.showString("Test2:")
let _i = input.int_input("input a number:", 3, -3, 1)
basic.showString("data:")
basic.showNumber(_i)

basic.showString("Test3:")
let a = false, b = true
input.onButtonPressed(Button.A, function() {

    basic.showString("A pressed.")
    a = true;
})
input.onButtonPressed(Button.B, function() {
    basic.showString("B pressed.")
    b = true;
})
while (true){
    if(a) if (b){
        basic.showString("Done.")
        break
    }
}
