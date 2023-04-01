/*  
    枚举属性，将对象中所有属性全部获取
*/

let mySymbol = Symbol()
let obj3 = {
    name: '猪八戒',
    age: 18,
    ['gender']: '男',
    [mySymbol]: '特殊属性',
    hello: {
        a: 1,
        b: true,
    }
};

/*  
    for-in 语句：
        for(let propName in 对象) {
            语句....
        }

    不是所有属性都可以被枚举：
        - 使用 symbol 添加的属性
*/

for (let propName in obj3) {
    console.log(propName, typeof obj3[propName], obj3[propName]);
}