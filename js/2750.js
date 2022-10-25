const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');
let N = Number(input.shift());
let numArr = input.map(x => +x);

numArr.sort(function(a,b) {
  if(a > b) return 1;
  if(a === b) return 0;
  if(a < b) return -1;
});

numArr.forEach(e => {
  console.log(e);
})
