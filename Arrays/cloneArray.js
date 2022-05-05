// Write a JavaScript function to clone an array.

// Test Data:
// console.log(array_Clone([1, 2, 4, 0]));
// console.log(array_Clone([1, 2, [4, 0]]))

function getClone(arr){
  return arr.slice(0);   //no space is used just returned the array
}

console.log(getClone([1,2,3]));
console.log(getClone(["10","20","30"]));
