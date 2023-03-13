function getLength(obj) {
    return obj.length;
}
// 对象是一个字符串，因为我们在上面声明了它作为 Backpack 的变量部分。
const object = backpack.get();
// function logPoint{
//   console.log('${p.x}',${p.y});
// }
// point变量未声明Point类型 是通过结构匹配判断point是Point类型变量
const point = { x: 12, y: 26 };
logPoint(point);
function logPoint(p) {
    console.log('${p.x}', '${p.y}');
}
class VirtualPoint {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
}
const newVPoint = new VirtualPoint(13, 14);
// logPoint(newVPoint);
