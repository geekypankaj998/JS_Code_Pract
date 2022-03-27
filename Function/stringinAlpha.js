// Write a JavaScript function that returns a passed string with letters in alphabetical order. Go to the editor
// Example string : 'webmaster'
// Expected Output : 'abeemrstw'

let str = prompt(' Enter the string you want : ');

function getRev(str){
  let arr = str.split('');
  console.log(' After split : ',arr);
  let ans = arr.sort();
  let finAns = ans.join(','); 
  console.log(finAns);
  return finAns;    
}
console.log('The returned string is : ',getRev(str));