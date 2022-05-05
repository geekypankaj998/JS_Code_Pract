// Write a JavaScript function to get the first element of an array. Passing a parameter 'n' will return the first 'n' elements of the array. Go to the editor
// Test Data :
// console.log(first([7, 9, 0, -2]));
// console.log(first([],3));
// console.log(first([7, 9, 0, -2],3));
// console.log(first([7, 9, 0, -2],6));
// console.log(first([7, 9, 0, -2],-3));
// Expected Output :
// 7
// []
// [7, 9, 0]
// [7, 9, 0, -2]
// []

function getFirstN(arr,end=1){
  let st = 0;
  if(end<0){
   return [];
  }
  return arr.slice(st,end);
}

console.log(getFirstN([1,2,3,4,5]));
console.log(getFirstN([1,2,3,4,5],4));
console.log(getFirstN([1,2,3,4,5],9));
console.log(getFirstN([1,2,3,4,5],-2));
console.log(getFirstN([1,2,3,4,5],5));


