console.log(require('fs').readFileSync('/dev/stdin').toString().trim().split(/\s+/).slice(1).map(Number).filter(x=>{
    if(x===1) return;
    for(let i=2;i<x;i++){
        if(x%i===0) return;
    }
    return true;
}).length)