// Write a JavaScript function that checks whether a passed string is palindrome or not? Go to the editor
// A palindrome is word, phrase, or sequence that reads the same backward as forward, e.g., madam or nurses run.
let getRev = (str)=>{
   let ans='';
   for(let itr=str.length-1;itr>=0;itr--){
         ans+=str[itr]; 
   } 
   return ans;
}
let str = prompt('Enter string ');
let strRev = getRev(str);

if(strRev === str){
    console.log('Is a Palind :)');
}
else{
  console.log('Not a Palind :(');
}