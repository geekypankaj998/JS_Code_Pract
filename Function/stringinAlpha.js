// Write a JavaScript function that returns a passed string with letters in alphabetical order. Go to the editor
// Example string : 'webmaster'
// Expected Output : 'abeemrstw'

let str = prompt(' Enter the string you want : ');
// split always works on strings and then return an array
// join works on an array and return a string in which by default ',' is concatenated
function getRev(str){
  let arr = str.split('');
  console.log(' After split : ',arr);
  let ans = arr.sort();
  // let finAns = ans.join(); 
  let finAns = '';
  for(itr of ans){
    finAns+=itr
  }
  console.log(finAns);
  return finAns;    
}
console.log('The returned string is : ',getRev(str));