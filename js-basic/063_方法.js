/*  
    方法（method）:
        - 当一个对象的属性是一个函数时，我们成这个属性是对象的方法
        - 调用这个函数就称为调用这个对象的方法
*/

let obj1 = Object();
obj1.name = '孙悟空';

obj1.fn1 = function() {
    console.log('对象方法');
}

console.log(obj1);
obj1.fn1();