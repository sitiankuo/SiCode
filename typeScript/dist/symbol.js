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
const sym22 = Symbol();
let sym33 = sym1;
class C {
}
C.StaticsSymbol = Symbol();
