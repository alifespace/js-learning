/*  
    原始值都属于不可变类型，一旦创建就不可以修改
    内存中不会重复创建相同的原始值
    对一个原始值变量重新赋值时，不会影响其他原始值变量

    对象属于可变类型
        - 对象创建后，可以任意增加和删除对象的属性
        - 如果有两个变量指向同一个对象，修改对象的属性会同时影响两个变量
        - 比较两个对象变量，比较的是内存地址
*/

let a = 10;
let b = a;

console.log(typeof b, b);

let obj1 = {
    name: '孙悟空',
}

let obj2 = Object();
obj2.name = '猪八戒';
obj2.age = 18;

let obj3 = obj2;
console.log(obj3);

obj2.name = '孙悟空';
console.log(obj3);
console.log(obj2 === obj3);