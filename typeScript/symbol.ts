// let sym1 = Symbol();
let sym2 = Symbol('key');


// let sym2 = Symbol("key");  symbol不可变，是唯一的
let sym3 = Symbol("key");
sym2 === sym3;

const sym = Symbol();
let obj1 = {
  [sym]: "value",
};
console.log(obj1[sym]); // "value"

// unique symbol
// 每个unique symbol都有完全独立的身份，
// 所以没有两种unique symbol类型可以分配或相互比较。
// if(sym22==sym33){
//   //这种是错误的写法
// }

declare const sym1:unique symbol;

const sym22:unique symbol = Symbol();
let sym33:typeof sym1 = sym1;

class C{
  static readonly StaticsSymbol:unique symbol=Symbol();
}
