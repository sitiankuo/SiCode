// 数字枚举
enum Direction{
  Up = 1,
  Down,
  Left,
  Right
}

// 枚举使用
function respond(recipient:string,message:Direction):void{

}
respond("Princess Caroline",Direction.Up);

// 字符串枚举
enum Direction {
  Up1 = "UP",
  Down1 = "DOWN",
  Left1 = "LEFT",
  Right1 = "RIGHT",
}

// 异构枚举(不建议)
enum BooleanLikeHeterogeneousEnum {
  No = 0,
  Yes = "YES",
}

// 计算的和常量成员
// All enum members in 'E1' and 'E2' are constant.

enum E1 { X, Y, Z }

enum E2 {
    A = 1, B, C
}


enum FileAccess {
  // constant members
  None,
  Read    = 1 << 1,
  Write   = 1 << 2,
  ReadWrite  = Read | Write,
  // computed member
  G = "123".length
}
console.log(FileAccess.Read);

// 联合枚举与枚举成员的类型

enum ShapeKind {
  Circle,
  Square,
}

interface Circle {
  kind: ShapeKind.Circle;
  radius: number;
}

interface Square {
  kind: ShapeKind.Square;
  sideLength: number;
}

// let c: Circle = {
//   kind: ShapeKind.Square,
//   //    ~~~~~~~~~~~~~~~~ Error!
//   radius: 100,
// }
// 运行时的枚举


// 反向映射(编译时会从枚举值到枚举名字。)

enum Enum {
  A
}
let aaaa = Enum.A;// 
let nameOfA = Enum[aaaa]; // "A"



// const枚举
const enum Enum1{
  A=1,
  B=A*2
}

const enum Directions{
  Up,
  Down,
  Left,
  Right
}

let directions=[Directions.Up,Directions.Down,Directions.Left,Directions.Right]

// 外部枚举
declare enum Enum {
  AA = 1,
  B,
  C = 2
}