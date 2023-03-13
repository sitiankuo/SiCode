// 不用泛型
// function identity(arg: number): number {
//   return arg;
// }

// 1、泛型
function identity<T>(arg:T):T{
  return arg;
}
// 第一种传入所有的参数
let output =identity<string>('myString');
// 第二种 类型推论 编译器会根据传入的参数自动确定T的类型
let output01 = identity('myString');


// 2、使用泛型变量
// 方法一
// function loggingIndetity<T>(arg:T[]):T[]{
//   console.log(arg.length);
//   return arg;
// }
// 方法二
function loggingIndetity<T>(arg:Array<T>):Array<T>{
  console.log(arg.length);
  return arg;
}
// 3、泛型类型

function identity01<T>(arg:T):T{
  return arg;
}
let myIdentity01:<T>(arg:T)=>T=identity01;
let myIdentity02: <U>(arg: U) => U = identity;
let myIdentity03: {<T>(arg: T): T} = identity;

// 泛型接口
interface GenericIdentityFn<T> {
  (arg: T): T;
}

function identit03<T>(arg: T): T {
  return arg;
}

let myIdentity: GenericIdentityFn<number> = identity;

// 泛型类
class GenericNumber<T> {
  zeroValue: T;
 add: (x: T, y: T) => T;
}

let myGenericNumber = new GenericNumber<number>();
myGenericNumber.zeroValue = 0;
myGenericNumber.add = function(x, y) { return x + y; };
// 也可以使用字符类
let stringNumeric = new GenericNumber<string>();
stringNumeric.zeroValue = "";
stringNumeric.add = function(x, y) { return x + y; };

console.log(stringNumeric.add(stringNumeric.zeroValue, "test"));

// 泛型约束
interface Lengthwise {
  length: number;
}

function loggingIdentity<T extends Lengthwise>(arg: T): T {
  console.log(arg.length);  // Now we know it has a .length property, so no more error
  return arg;
}
