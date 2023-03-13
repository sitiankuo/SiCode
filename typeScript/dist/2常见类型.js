//1、 常见类型 string  number boolean
//2、 any类型
let obj = { x: 0 };
obj.foo();
obj();
obj.bar = 100;
obj = 'hello';
const n1 = obj;
// let myName:string='Geoff.Si';
let myName = 'Geoff.Si';
// 不必须需要添加类型
// 3、功能
// 3.1、参数类型注释
function greet(name) {
    console.log('hello,' + name.toUpperCase() + '!!');
}
// 3.2、返回类型注释
function getFavoriteNumber() {
    return 26;
}
// 3.3、匿名函数  
// 当函数出现在 TypeScript 可以确定将如何调用它的地方时，
// 该函数的参数会自动指定类型。
const names = ["Alice", "Bob", "Eve"];
names.forEach(function (s) {
    console.log(s.toUpperCase());
});
names.forEach((s) => {
    console.log(s.toUpperCase());
});
// 4、对象类型
function printCoord(pt) {
    console.log("The coordinate's x value is " + pt.x);
    console.log("The coordinate's x value is " + pt.y);
}
printCoord({ x: 3, y: 4 });
// 4.1、可选类型   部分或全部属性是可选的。
function printName(obj) {
    // ...
}
// Both OK
printName({ first: "Bob" });
printName({ first: "Alice", last: "Alisson" });
// 5、联盟类型
// 一个可以对字符串或数字进行操作的函数：
// 如果您有 union string | number，则不能使用仅适用于 的方法string：要进行判断类型
function printId(id) {
    console.log("Your ID is: " + id);
}
// OK
printId(101);
// OK
printId("202");
// 与前面的示例完全相同
function printCoord01(pt) {
    console.log("The coordinate's x value is " + pt.x);
    console.log("The coordinate's y value is " + pt.y);
}
printCoord01({ x: 100, y: 100 });
function sanitizeInput(str) {
    return sanitize(str);
}
// 创建一个经过清理的输入框
let userInput = sanitizeInput(getInput());
// 仍然可以使用字符串重新赋值
userInput = "new input";
function printCoord02(pt) {
    console.log("The coordinate's x value is " + pt.x);
    console.log("The coordinate's x value is " + pt.y);
}
printCoord02({ x: 4, y: 34 });
// 8、类型断言（用于指定更具体的类型）同类型注释一样 强制转换
// 写法一：const myCanvas = document.getElementById("main_canvas") as HTMLCanvasElement；
// 写法二：const myCanvas = <HTMLCanvasElement>document.getElementById("main_canvas");
const x = 'hello';
// 9、文字类型
function printText(s, alignment) {
    // ...
}
printText("Hello, world", "left");
// printText("G'day, mate", "centre");
// 10、文字推理
const obj2 = { counter: 0 };
if (obj2) {
    obj2.counter = 1;
}
// null undefined
// 非空断言运算符（后缀！）
function liveDangerously(x) {
    // No error
    console.log(x.toFixed());
}
// 枚举
// bigint 非常大的数
// symbol 创建全局唯一引用
