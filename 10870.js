const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');
let n = Number(input[0]);

function fibonacci(n) {

    if (n < 2) {
      return n; 
    } else {
      return fibonacci(n - 1) + fibonacci(n - 2);
    }
}
console.log(fibonacci(n));