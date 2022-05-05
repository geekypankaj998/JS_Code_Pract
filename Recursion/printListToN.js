let num = prompt('Enter the number to which you want to view thw list : ');
console.log("The list is : ");

function recPrint(num){
  if(num==1){
     console.log(num+" ");
     return;
  } 
  recPrint(num-1);
  console.log(Number(num));
}
recPrint(num);