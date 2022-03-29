// 5. Write a JavaScript function that accepts a string as a parameter and converts the first letter of each word of the string in upper case. Go to the editor
// Example string : 'the quick brown fox'
// Expected Output : 'The Quick Brown Fox '

let str = prompt('Enter text : ');

let strArr = str.split(' ');
// let countr=0;
console.log('After spilting : ',strArr);

for(let itr=0; itr<strArr.length; itr++){
  
   let strCurr = strArr[itr];
   console.log(strCurr[0].toUpperCase()+strCurr.slice(1));
   strArr[itr] = strCurr[0].toUpperCase()+strCurr.slice(1);
   console.log(' Current in array : ',strArr[itr]);
  
}
console.log(strArr);
// actual way
strArr = strArr.join(' ');
console.log(strArr);