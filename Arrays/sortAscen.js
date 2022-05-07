// Write a JavaScript program to sort the items of an array. Go to the editor
// Sample array : var arr1 = [ 3, 8, 7, 6, 5, -4, 3, 2, 1 ];
// Sample Output : -4,-3,1,2,3,5,6,7,8

function getSort(arr){
  arr.sort((a,b)=>{
      return a-b;  
  });
  
}

let size = prompt("Enter the size of the array :");
let arr=[];
for(let itr=0;itr<size;itr++){
  let num = prompt("Enter the "+itr+"th value : ");
  arr.push(num);
}
console.log(arr);
getSort(arr);
console.log(arr);