// Write a JavaScript function to check whether an `input` is an array or not. Go to the editor
// Test Data :
// console.log(is_array('w3resource'));
// console.log(is_array([1, 2, 4, 0]));
// false
// true

function checkArray(inp){
  return Array.isArray(inp); 
}   


console.log("The input is  : "+ checkArray("qq"));
console.log("The input is  : "+ checkArray("@@"));
console.log("The input is  : "+ checkArray(1121));
console.log("The input is  : "+ checkArray({
name:"pankaj"
}));
console.log("The input is  : "+ checkArray([1,2,3,4,5]));
console.log("The input is  : "+ checkArray(["Stringer","Stringer","Stringer","Stringer","Stringer"]));



