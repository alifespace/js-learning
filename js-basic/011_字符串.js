let a = 'Hello JS';

/*  
    字符串：
        - JS中，使用单引号或者双引号来表示字符串；
        - 转义字符，\
            \" --> "
            \\ --> \
            \t --> 制表符
            \n --> 换行
        - 模板字符串
            - 使用 ` 来表示模板字符串
            - 模板字符串中可以嵌入变量
*/
console.log(a);
a = '换行\n符'
console.log(a);

a = '今天天气 \
    真不错';
console.log(a);

a = `今天
天气
真不错`
console.log(a);

let name = '孙悟空';
let str = `你好，${name}`;
console.log(str);
