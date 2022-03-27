// 1. Write a JavaScript function that reverse a number.

let num = prompt('Enter a number');
num = Number(num);

console.log(num);
let temp = num;
let currN = 0;
let countr=0;
while(temp>0){
   let currRem = temp%10;
   console.log('Current Remainder : ',currRem);
   currN = Number(currRem) + Number(10*currN);
   temp=parseInt(temp/10);
   countr++;
   console.log('CurrN is  : ',currN);
   console.log('Left No : ',temp);
}
console.log(currN);
alert('The reversed numb is '+currN);