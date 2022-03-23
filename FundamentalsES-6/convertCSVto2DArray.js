// Converts a comma-separated values string to a 2D array

let convertCSV=(inp)=>{
  console.log(inp);
  let cleanNewL = inp.split('\n');
  console.log('After cleaning NewLine : ',cleanNewL);
  // let cleanText = cleanNewL.split(',');
  let ans=[];
  for(itr of cleanNewL){
     let currClean = itr.split(/[',',':',';']/);
     ans.push(currClean);  
  }
    
  return ans;
}

console.log(convertCSV('a,b\nc,d'));
