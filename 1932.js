var fs = require('fs');
var inputs = fs.readFileSync('/dev/stdin').toString().split('\n');
var cases = Number(inputs[0]);
inputs.shift();
var dp = [[Number(inputs[0])],
[Number(inputs[1].split(' ')[0]) + Number(inputs[0]), Number(inputs[1].split(' ')[1]) + Number(inputs[0])]];
for(var i=2; i<cases; i++){
    var arr = inputs[i].split(' ').map(v=>Number(v));
    var tmp = [];
     for(var j=0; j<arr.length; j++){
         if(j===0){
             tmp.push(dp[i-1][0] + arr[j]);
         }else if(j===arr.length-1){
             tmp.push(dp[i-1][arr.length-2] + arr[j]);
         }else{
             tmp.push(Math.max(dp[i-1][j], dp[i-1][j-1]) + arr[j]);
         }
    }
    dp.push(tmp);
}
console.log(Math.max(...dp[cases-1]));