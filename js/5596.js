const fs = require('fs');

const [A, B] = fs.readFileSync("/dev/stdin").toString().trim().split('\n')

const sumA = A.split(' ').map(i => Number(i)).reduce((acc, cur) => acc + cur)
const sumB = B.split(' ').map(i => Number(i)).reduce((acc, cur) => acc + cur)

const answer = sumA >= sumB ? sumA : sumB;

console.log(answer);
