   // 一、联合
    type MyBool = true | false;


    type windowStates = "open" | "closed" | "minimized";
    type LockStates = "locked" | "unlocked";
    type PositiveOddNumbersUnderTen = 1 | 3 | 5 | 7 | 9;

function getLength(obj: string | string[]) {
  return obj.length;
}
  // 要想知道变量的类型 使用typeof
  // typeof s =="string";


  // 二、泛型
  type StringArray = Array<string>;
  type NumberArray = Array<number>;
  type ObjectWithNameArray = Array<{ name: string }>;

  // 自定义泛型类型
  // 这一行是一个简写，可以告诉 TypeScript 有一个常量，叫做`backpack`，并且不用担心它是从哪
  // 里来的。
  interface Backpack<Type> {
    add: (obj: Type) => void;
    get: () => Type;
  }
  declare const backpack: Backpack<string>;
  
  // 对象是一个字符串，因为我们在上面声明了它作为 Backpack 的变量部分。
  const object = backpack.get();
    
  // 因为 backpack 变量是一个字符串，不能将数字传递给 add 函数。
  // backpack.add(23);

  // 三、结构化的类型系统
  interface Point1{
    x:Number;
    y:Number;
  }

  // function logPoint{
  //   console.log('${p.x}',${p.y});
  // }
  // point变量未声明Point类型 是通过结构匹配判断point是Point类型变量
  const point ={x:12,y:26};
  logPoint(point);

  // 3.1、类和对象确定结构的方式没有区别：
  interface Point1{
    x:Number;
    y:Number;
  }
  function logPoint(p:Point){
    console.log('${p.x}','${p.y}');
  }

  class VirtualPoint{
    x:Number;
    y:Number;

    constructor(x:number,y:number){
      this.x=x;
      this.y=y;
    }
  }
  const newVPoint=new VirtualPoint(13,14);
  // logPoint(newVPoint);

