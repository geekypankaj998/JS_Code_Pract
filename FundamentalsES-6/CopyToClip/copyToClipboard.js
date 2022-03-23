// 2. Write a JavaScript program to copy a string to the clipboard.
let copyText = document.querySelector('#copyText');
let copyButt = document.querySelector('#copyButt');
let pasteText = document.querySelector('#pasteText');
let pasteButt = document.querySelector('#pasteButt');

copyButt.addEventListener('click',async()=>{
   
   await navigator.clipboard.writeText(copyText.value);
   alert('Copied!!');
   
});


pasteButt.addEventListener('click',async()=>{
  let content = await navigator.clipboard.readText();
  console.log(navigator.clipboard.readText());
  pasteText.value = content; 
});