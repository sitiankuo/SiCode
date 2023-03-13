console.log('hello world');

function greet1(person: string, date: Date) {
  console.log(`Hello ${person}, today is ${date.toDateString()}!`);
}

greet1("Maddison", new Date());




// 擦除类型
function sum1(a:number,b:number):number{
  return a+b;
}
const result = sum1(22,33);
console.log(sum1(32,43));

let b = 10;
b=11;
let c:10;
// c=11;

let a:'male'|'famale';
a='famale';
a='male';

let d:string |number|boolean;
d='sd';
d=12;
d=false;


let e:any;
e=1;
e='sd';
e=false;

let f:unknown;
f='sd';
f=21;
f=a;
f=d;
// unknown不能直接赋值给其他类型
if(typeof f==='string'){
  f=e;
}
// 类型断言(两种写法)
d = f as string;
d=<string>f;

// void never用于设置函数返回值


function trees(a:string):void {

};

let aa:object;
aa={};
aa=function(){

};

let bb:{name:string,age?:number};
bb={name:'Geoff.Si',age:21};
bb={name:'Geoff.Si'};
// 表示除了name属性，其他任意属性可以加，包括属性值类型也可以任意
let cc:{name:string,[propName:string]:any};
cc={name:'justin-bieber',age:28,job:'singer'};

// 定义函数结构的类型声明
// 语法：（形参：类型，形参：类型。。。）=>number
// 代表函数返回值类型是number类型
let dd:(name:string,age:number)=>number;
dd=function(name:string,age:number):number{
  return 10;
}
console.log(dd('孙悟空',8));

// 数组
let ee:string[];
ee=['ds','sd','d'];

let ff:Array<number>;
ff=[1,2,3,4];

let h:[string,number];
h=['aaa',21];

// 枚举
enum Gender{
  male=1,
  famale=0
};
let i:{name:string,gender:Gender};
i = {
  name:"孙悟空",
  gender:Gender.famale
}

let j:string &number;

type myString =string;
let aaa:myString;
aaa='sa';


