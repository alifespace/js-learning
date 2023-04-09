/*  
    数组（内建对象）
        - 数组也是一种复合数据类型，在数组中可以存储多个不同类型的数据
        - 数组中存储的是有序的数据类型，数值中的每一个数据都有唯一的索引
        - 索引(index)，一组连续的非负整数
    
    创建数组
        - 通过 Array()来创建数组, 也可以通过 [] 来创建数组    
        - 向数组中添加元素
            - 数组[索引] = 元素         
*/

const obj1 = {name: '孙悟空', age: 18};
const arr1 = new Array();
const arr2 = [];  // 数组字面量

console.log(arr1);
console.log(arr2);

arr1[0] = 1;
arr1[1] = 'Hello';
arr1[10] = 'end';
console.log(arr1, arr1.length);

let count = 3000, i;
let t1 = process.hrtime();

for (i = 0; i<count; i++) {
    arr1[i] = i + 1;
};


let d1 = new Date().getTime(), num;

for (i = 0; i<count; i++) {
    do {
        num = Math.floor(Math.random() * count);
    } while(arr1[num] == null);

    arr2[i] = arr1[num];
    process.stdout.write(arr2[i].toString() + ', ');
    // process.stdout.write(', ');
};

let t2 = process.hrtime(t1);
console.log(t2[1]/1000000);

