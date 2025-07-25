// 在此处测试；当此软件包作为插件使用时，将不会编译此软件包。

basic.showString("Test1:")
let i = input.stringinput("input a string:")
basic.showString("data:" + i)
basic.showString("Test2:")
let _i = input.int_input("input a number:", 3, -3, 1)
basic.showString("data:")
basic.showNumber(_i)
basic.showString("Test3:")
i = input.choose(["a", "b", "c"], "Choose any:")
basic.showString("You choose:" + i)
