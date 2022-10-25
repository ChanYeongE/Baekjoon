const fs = require('fs');

const [B1, B2] = fs.readFileSync("/dev/stdin").toString().trim().split('\n').map(Number);;

const answer = (BigInt("0b" + B1)*BigInt("0b" + B2)).toString(2)
console.log(answer);
