const fs = require('fs');

const input = fs.readFileSync("/dev/stdin").toString().trim();

const answer = Math.sqrt(3) * input * input / 4;

console.log(answer);
