// Write a JavaScript program to find the most frequent item of an array. Go to the editor
// Sample array : var arr1=[3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
// Sample Output : a ( 5 times )


let size = prompt(" Enter the size of the Array : ");
let myMap = new Map();
let itr=0;
alert("Enter key value pair in a way that have - in between them like 'key' - 'value' ");
while(itr<size){
 let str = prompt('Enter the key value pair');
 let arr= str.split('-');
 let key = arr[0];
 console.log(key);
  key = key.trim();
 let value = arr[1];
 if(myMap.has(key)){
  let valCurr = myMap.get(key);
  myMap.set(key,valCurr+1); 
 }
 else{
  myMap.set(key,1);
 }

itr++;
}

let maxKey="";
let maxCount=0;
myMap.forEach (function(value, key) {
  if(myMap.get(key)>maxCount){
     maxCount = myMap.get(key);
     maxKey = key;
  }
});
console.log("Max Occurance key is : "+maxKey+" with a acount of "+maxCount);

