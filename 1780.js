const fs = require('fs');
const [n,...arr] = fs.readFileSync("./dev/stdin").toString().trim().split("\n");

const N = +n
const board = arr.map(v=>v.split(' ').map(v=>+v))


let answer = [0,0,0]
paper(0,0,N)

function paper(y,x,size){

  let first = board[y][x];
  let same = true;
  
  for(let i = y; i<y+size; i++){
    for(let j = x; j<x+size; j++){
      if(board[i][j]!=first) {
        same =false;
        break;
      }
    }
    if(!same)break;
  }
  
  if(same){
    answer[first+1]++;
  }else{
    paper(y,x,size/3)
    paper(y,x+size/3,size/3)
    paper(y+size/3,x+size/3*2,size/3)
    paper(y+size/3,x,size/3)
    paper(y+size/3,x+size/3,size/3)
    paper(y,x+size/3*2,size/3)
    paper(y+size/3*2,x,size/3)
    paper(y+size/3*2,x+size/3,size/3)
    paper(y+size/3*2,x+size/3*2,size/3)
  }
  return; 
}

console.log(answer.join('\n'))