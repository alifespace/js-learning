/*  */

let i, j, k, temp, t1, t2;

t1 = process.hrtime();

for(i = 0; i < 10; i++) {
    for (j = 0; j < 10; j++) {
        if (i != j) {
            k = i*1000 + i*100 + j*10 + j;
            for(temp = 31; temp < 100; temp++) {
                if(temp * temp == k) {
                    console.log(k);
                } else if (temp * temp > k) {
                    break;
                }
            } 
        }
    }
}

t2 = process.hrtime(t1);
console.log('耗时：', t2[1], 'ms');