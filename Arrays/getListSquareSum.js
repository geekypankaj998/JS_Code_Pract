// Write a JavaScript program to find the sum of squares of a numeric vector.
// [1,2,3,4] => 30

let arr=[1,2,3,4,5,6];

function getSquareListSum(arr){
  let sum = 0;
  arr.forEach((val)=>{
     let currVal = (val*val);
     sum+=currVal;
  });
  return sum;
}
console.log(getSquareListSum(arr));