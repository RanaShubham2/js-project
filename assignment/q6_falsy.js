// Q16. Write a function that takes any input and returns true if it is falsy. Test with: 0, '', false, null,
// undefined, NaN.

function check_falsy(val){
   if(val===0||val===undefined||val===false||Number.isNaN(val)||val===null||val===""){
    return true
   }
   else{
    return false
   }
}
let a
let b=false
let c =null
console.log('for val 0:',check_falsy(0))
console.log('for NaN value:',check_falsy(NaN))
console.log('for val undefined:',check_falsy(a))
console.log('for val false:',check_falsy(b))
console.log('for val null:',check_falsy(c))
console.log('for val blank:',check_falsy(''))
