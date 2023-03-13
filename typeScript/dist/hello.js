console.log('hello world');
function greet1(person, date) {
    console.log(`Hello ${person}, today is ${date.toDateString()}!`);
}
greet1("Maddison", new Date());
// 擦除类型
function sum1(a, b) {
    return a + b;
}
const result = sum1(22, 33);
console.log(sum1(32, 43));
let b = 10;
b = 11;
let c;
// c=11;
let a;
a = 'famale';
a = 'male';
let d;
d = 'sd';
d = 12;
d = false;
let e;
e = 1;
e = 'sd';
e = false;
let f;
f = 'sd';
f = 21;
f = a;
f = d;
// unknown不能直接赋值给其他类型
if (typeof f === 'string') {
    f = e;
}
// 类型断言(两种写法)
d = f;
d = f;
// void never用于设置函数返回值
function trees(a) {
}
;
let aa;
aa = {};
aa = function () {
};
let bb;
bb = { name: 'Geoff.Si', age: 21 };
bb = { name: 'Geoff.Si' };
// 表示除了name属性，其他任意属性可以加，包括属性值类型也可以任意
let cc;
cc = { name: 'justin-bieber', age: 28, job: 'singer' };
// 定义函数结构的类型声明
// 语法：（形参：类型，形参：类型。。。）=>number
// 代表函数返回值类型是number类型
let dd;
dd = function (name, age) {
    return 10;
};
console.log(dd('孙悟空', 8));
// 数组
let ee;
ee = ['ds', 'sd', 'd'];
let ff;
ff = [1, 2, 3, 4];
let h;
h = ['aaa', 21];
// 枚举
var Gender;
(function (Gender) {
    Gender[Gender["male"] = 1] = "male";
    Gender[Gender["famale"] = 0] = "famale";
})(Gender || (Gender = {}));
;
let i;
i = {
    name: "孙悟空",
    gender: Gender.famale
};
let j;
let aaa;
aaa = 'sa';
