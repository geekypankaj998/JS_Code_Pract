// Write a JavaScript function that generates all combinations of a string. Go to the editor
// Example string : 'dog'
// Expected Output : d,do,dog,o,og,g

let str = prompt(' Enter String : ');

for(let i = 0;i<str.length;i++){
   for(let j=i;j<str.length;j++){
       console.log(str.slice(i,j+1)); 
   } 
}
