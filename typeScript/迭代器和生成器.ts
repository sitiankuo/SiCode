let someArray=[1,'string',false];
for(let entry of someArray){
  console.log(entry);
}

// for..in迭代的是对象的 键 的列表，而for..of则迭代对象的键对应的值。
 let list=[4,5,6];
 for(let i in list){
  console.log('for-in:'+i);
 }

 for(let i of list){
  console.log('for-of:'+i);
 }