/*
    七种原始的数据类型：数值（number), 大整数(BigInt), 字符串(String), 布尔值(Boolean),
    空值(Null), 未定义(Undefined), 符号(Symbol)

    原始值一旦创建就不可以更改，变量只可以改地址，不能改变原地址指向的内容
*/

/*
    数值(Number)
        - 在JS中所有的整数和浮点数都是数值
        - JS中的数值不是无限大的，当数值超过一定范围后会显示近似值
        - Infinity 是一个特殊数值，表示无限大
        - NaN 也是一个特殊的数值，表示非法的数值
        - 所以在JS进行一些精度比较高的运算要十分注意
*/

console.log(10);
console.log(3.14);
console.log(9999999999999991);   // 显示近似值
console.log(99999 ** 9999);

a = Infinity;
console.log('0.1 + 0.2 =', 0.1+0.2);
console.log('1 - "a" =', 1-'a');

/*  
    BigInt
        - 表示比加大的整数
        - 大整数使用n结尾，它可以表示的范围是无限大的，仅受到内存的限制
*/
a = 9999999999999999999999999999999999999999999n;
console.log(a);

/*  
    其它进制的数值：
        二进制：0b1010
        八进制：0o77
        十六进制：0x1F
    输出默认总是以十进制数值打印
*/