// . Write a simple JavaScript program to join all elements of the following array into a string. Go to the editor
// Sample array : myColor = ["Red", "Green", "White", "Black"];
// Expected Output :
// "Red,Green,White,Black"
// "Red,Green,White,Black"
// "Red+Green+White+Black"
function getString(arr){
   return arr.join();
}

console.log(getString([1,2,3,4]));
console.log(getString(['a','b','c','d']));
console.log(getString(['axe','bat','cat','dog']));

