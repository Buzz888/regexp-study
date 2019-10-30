let reg = /^\d/ //以数字开头
console.log(reg.test("zhuzhupang"))
console.log(reg.test("2019zhuzhupang"))
console.log(reg.test("zhuzhupang2019"))
// false
// true
// false
console.log("----")
let reg1 = /\d$/ //以末尾结尾
console.log(reg1.test("zhuzhupang"))
console.log(reg1.test("2019zhuzhupang"))
console.log(reg1.test("zhuzhupang2019"))
// false
// false
// true
// let reg = /\d/ 都不加 包含
// let reg = /^\d+$/ 两个都加 只能是规则一致的内容

//手机号码验证
console.log("----")
let regnum = /^1\d{10}$/
console.log(regnum.test("13372978238")) //最简单
// true
//\

let reg3 = /^2.3$/ //.不是小数点 需要转义
console.log(reg3.test("2k3"))
console.log(reg3.test("2@3"))
console.log(reg3.test("23"))

// true
// true
// false
let reg4 =/^2\.3$/
console.log("----")
console.log(reg4.test("2.3"))
console.log(reg4.test("2k3"))
console.log(reg4.test("2@3"))
console.log(reg4.test("23"))
// true
// false
// false
// false
let reg5 = /^1|2$/
console.log("----")
console.log(reg5.test("3"))
console.log(reg5.test("1"))
console.log(reg5.test("23"))
// false
// true
// false
let reg6 = /^[@+]$/
console.log("----")
console.log(reg6.test("@"))
console.log(reg6.test("+"))
console.log(reg6.test("@+"))
// true
// true
// false

let reg7 = /^[\d]$/  //特殊
console.log("----")
console.log(reg7.test("d"))
console.log(reg7.test("9"))
// false
// true

let reg8 = /\js$/
console.log("----")
console.log(reg8.test("12.js"))

let reg9 = /^[19]$/
console.log("----")
console.log(reg9.test("19"))
console.log(reg9.test("1"))
console.log(reg9.test("9"))
// false
// true
// true

let reg10 =/^[\(10-29)]$/
console.log("----")
console.log(reg10.test("("))
console.log(reg10.test("1"))
console.log(reg10.test("3"))
