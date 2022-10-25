const fs = require('fs');
const input = fs.readFileSync('dev/stdin').toString().trim();
let addN = 0
let count = 0;
let N = +input;
let isNotSame = true; 
while(isNotSame) {
    addN = Math.floor(N/10) + N%10; 
    N = N%10*10 + addN%10;
    count++
    if(N==input){
        console.log(count);
        isNotSame = false;
    }