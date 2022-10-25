const fs = require('fs'); 

let answer = 0; 

const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n").map(i => answer += Number(i)); 

let minute = parseInt(answer/60) 
let second = parseInt(answer%60) 

let ans = `${minute}\n${second}`; 

console.log(ans)

