// Write a JavaScript program to find the kth greatest element of a given array of integers  
let size = prompt('Enter the size of Array');
let arr  =[]; 
if(size<=0){
    alert('Please enter valid size atleast greater than 1');
    location.reload();
}
for(let itr=0;itr<size;itr++){
    let curr = prompt(`Enter the ${itr}th value `);  
    arr.push(curr);
}

console.log('Actual array :');
for(let itr=0;itr<size;itr++){
  console.log(arr[itr] + " ");
}

let uniqueArr =[];
uniqueArr.push(arr[0]);
for(let itr=1;itr<size;itr++){
  if(uniqueArr.indexOf(arr[itr])==-1){
      //First time came across this element so include it 
      uniqueArr.push(arr[itr]);
  }
}

console.log(' Unique elements in the array : ');
for(let itr=0;itr<uniqueArr.length;itr++){
   console.log(uniqueArr[itr] + " ");
}

console.log('Sorting....');

uniqueArr.sort((a,b)=> a-b);

console.log(uniqueArr);

let len = uniqueArr.length;
let times = prompt('The no of times you want you want to try ');
let count=0;
let greatestVal;
while(count<times){
  // Take the greatest val input 
  greatestVal = prompt('Enter the Kth Greatest element you want to find');
  if(greatestVal<0){
    alert('Please enter valid value greater than 1');
    location.reload();
  }
  if(greatestVal>size){
    alert('Please enter valid value atleast lesses than the max size of array content');
    location.reload();
  }
 
  if(greatestVal<=uniqueArr.length){
    console.log('Yes this can be searched');
   }
   console.log('The answer is : ',uniqueArr[uniqueArr.length-1-greatestVal+1]);
   alert('The answer is : '+ uniqueArr[uniqueArr.length-1-greatestVal+1]);
   count++;   
  
}
alert('End');

