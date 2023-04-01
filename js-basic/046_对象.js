/*  
    数据类型：
        原始值：Number, BigInt, String, Boolean, Null, Undefined, Symbol
            - 只能表示简单的数据，不能复杂数据（表示一个人的信息） 
    
        对象：新的数据类型
            - 多个原始值的组合
            - 对象是JS中的复合数据类型，相当于一个容器，在对象中可以存储不同类型的数据
            - 
*/

let a = 10, b = 'hello';

// 创建对象1

let obj1 =Object();
/*  
    对象中可以存储多个类型的数据，被称为属性
    向对象添加属性：
        对象.属性名 = 属性值;
        
    读取对象属性：
        对象.属性名
        如果读取一个对象不存在的属性，返回 undefined

    删除对象属性：
        delete 对象.对象属性
*/

console.log(obj1);
obj1.name = '孙悟空';
obj1.age = 50;
obj1.gender = '男';

console.log(obj1);
console.log(`obj1.name = ${obj1.name}`);
