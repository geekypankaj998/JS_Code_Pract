// Write a JavaScript program which accept a string as input and swap the case of each character. For example if you input 'The Quick Brown Fox' the output should be 'tHE qUICK bROWN fOX'. 

let str = prompt('Enter the string you want');
function toggleStr(inp){
  let ans="";
  let itr=0;
    while(itr<inp.length){
      let currCh = inp.substr(itr,1);
    if(currCh.toUpperCase()===currCh){
        ans+=currCh.toLowerCase();
    }
    else{
        ans+=currCh.toUpperCase();
    }
    itr++;
  }
  return ans;
}
console.log(toggleStr(str));