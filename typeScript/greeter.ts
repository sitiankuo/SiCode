// function greeter(person){
//   return "hello,"+person;
// }
// let user='Geoff.Si';
// document.body.textContent=greeter(user);

// 1、interface接口
// interface Person{
//   firstName:string;
//   lastName:string;
// }

// function greeter(person:Person){
//   return "Hello!"+person.firstName+'.'+person.lastName;
// }
// let user ={firstName:'Geoff',lastName:'Si'};
// document.body.textContent=greeter(user);


// 2、class 
// class Student{
//   fullName:string;
//   constructor(
//     public firstName:string,
//     public middleInitial:string,
//     public lastName:string
//   ){
//     this.fullName=firstName+lastName;
//   }
// }

// interface Person {
//   firstName: string;
//   lastName: string;
// }
 
// function greeter(person: Person) {
//   return "Hello, " + person.firstName + " " + person.lastName;
// }
 

// let ustudent = new Student('Geoff','.','Si');
// document.body.textContent=greeter(ustudent);