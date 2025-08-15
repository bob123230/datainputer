// 在此处测试；当此软件包作为插件使用时，将不会编译此软件包。
/*
basic.showString("Test1:")
let i = inputdata.stringinput("input a string:")
basic.showString("data:" + i)
basic.showString("Test2:")
let _i = inputdata.int_input("input a number:", 3, -3, 1)
basic.showString("data:")
basic.showNumber(_i)

// let i:string
basic.showString("Test3:")
i = inputdata.choose(["a", "b", "c"], "Choose any:")
basic.showString("You choose:" + i)
*/
let _i:number
basic.showString("Test4:")
_i = inputdata.numberinput("Input a number:")
basic.showNumber(_i)
