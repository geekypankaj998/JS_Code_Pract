// Write a JavaScript program to compare two objects to determine if the first one contains equivalent property values to the second one.

let matches  = (source,obj)=>{
  return Object.keys(source).every(key=>obj.hasOwnProperty(key) && source[key]===obj[key]);
}
console.log(matches({name:'Pankaj',age : 24 , profession : 'dev'},{name:'Pankaj',age : 24 , profession : 'dev'}));

// 2nd method 
// let match = (source,obj)=>{
// let ans;
// for(itr in source){
//   if(!obj.hasOwnProperty(itr)){
//       ans = false; 
//   }
// }
// ans=true;
// console.log(ans);
// }
// console.log(match({name:'Pankaj',age : 24 , profession : 'dev'},{name:'Pankaj',age : 24 , profession : 'dev'}));