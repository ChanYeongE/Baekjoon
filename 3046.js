const fs = require('fs'); 
const input = fs.readFileSync("/dev/stdin").toString().trim().split(" ").map(Number); 
let answer = input[1] * 2 - input[0]; 
console.log(answer)

