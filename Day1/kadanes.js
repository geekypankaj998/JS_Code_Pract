// Max possible sum continuos arranged 
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

let locSum=0;
let maxSum = Number.MIN_VALUE;
for(let itr=0;itr<size;itr++){
  locSum=Number(locSum)+Number(arr[itr]);
   if(locSum<0){
      locSum=0;
   } 
   else{
     maxSum = Math.max(locSum,maxSum);
   }
  
}
 if(maxSum==Number.MIN_VALUE){  //All are negatives in the list
     //so now I should return the min Negative value
     maxSum = Math.max(...arr);
 }
console.log(' The sum will be : ',maxSum);
