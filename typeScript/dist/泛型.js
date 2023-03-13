// 不用泛型
// function identity(arg: number): number {
//   return arg;
// }
// 1、泛型
function identity(arg) {
    return arg;
}
// 第一种传入所有的参数
let output = identity('myString');
// 第二种 类型推论 编译器会根据传入的参数自动确定T的类型
let output01 = identity('myString');
// 2、使用泛型变量
// 方法一
// function loggingIndetity<T>(arg:T[]):T[]{
//   console.log(arg.length);
//   return arg;
// }
// 方法二
function loggingIndetity(arg) {
    console.log(arg.length);
    return arg;
}
// 3、泛型类型
function identity01(arg) {
    return arg;
}
let myIdentity01 = identity01;
let myIdentity02 = identity;
let myIdentity03 = identity;
function identit03(arg) {
    return arg;
}
let myIdentity = identity;
// 泛型类
class GenericNumber {
}
let myGenericNumber = new GenericNumber();
myGenericNumber.zeroValue = 0;
myGenericNumber.add = function (x, y) { return x + y; };
// 也可以使用字符类
let stringNumeric = new GenericNumber();
stringNumeric.zeroValue = "";
stringNumeric.add = function (x, y) { return x + y; };
console.log(stringNumeric.add(stringNumeric.zeroValue, "test"));
function loggingIdentity(arg) {
    console.log(arg.length); // Now we know it has a .length property, so no more error
    return arg;
}
