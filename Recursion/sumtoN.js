let num = prompt('Enter the first Nth term count to which you want to get sum to : ');

function sumToN(num){
  if(num==1 || num==0){
     return num;
  }
  if(num<0){
    return 0;
  }

  let smallAns = sumToN(num-1);
  return (Number(num) + Number(smallAns));
}

let ans = sumToN(num);
console.log("The list sum : "+ans);