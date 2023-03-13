// class
// class 类名{
//   定义属性
// 属性名1：数据类型
// 属性名2：数据类型
// 属性名3：数据类型

// 定义方法
// 方法名称（）{
//   return 返回值
// }

// }
// const 实体名称=new 类名（）；
   
class Person{
  fristName:string='hello';
  lastName:string='world';

  constructor(firstName:string,lastName:string){
    this.fristName=firstName;
    this.lastName=lastName;
  }

  sayHi(){
    console.log(this.fristName+'.'+this.lastName);
  }
}
const wuKong=new Person('Kong','Sun');


// 继承


  class Animal{
    name:string;
    voice:string;
    constructor(name:string,voice:string){
      this.name=name;
      this.voice=voice;
    }
    sayHi(){
      console.log(this.voice);
    }
  }
  const dog = new Animal('大黄','汪汪汪~');
