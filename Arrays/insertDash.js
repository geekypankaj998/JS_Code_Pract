// Write a JavaScript program which accept a number as input and insert dashes (-) between each two even numbers. For example if you accept 025468 the output should be 0-254-6-8. Go to the editor


let numb = prompt("Enter the number");
let splitArr = numb.split('');
console.log(splitArr);
let ans=[];
let itr=0;
while(itr<splitArr.length-1){
  let curr = splitArr[itr];
  let next = splitArr[itr+1];
  ans.push(curr);
  if(curr%2==0 && next%2==0){
     ans.push('-');
  }
  itr++;
}
ans.push(splitArr[splitArr.length-1]);

let fAns = ans.join('');

console.log(fAns);
