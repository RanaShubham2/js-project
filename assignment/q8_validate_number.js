// Q18. Write a program that converts a string number to integer, float, and checks if the conversion result is a
// valid number.
function conv_number(num){
  let int = Number(num)
  console.log('integer number:',int);
  
  let float = parseFloat(num)
  console.log('float number:',float);

  if(!isNaN(int)||!isNaN(float)){
    return true
  }
  else{
    return false
  }
   
}
console.log(conv_number('sss'));
