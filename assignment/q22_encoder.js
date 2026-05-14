
// Q13. Build a Caesar cipher encoder/decoder using a for loop to shift characters by a given number.
let word = 'car'
let shift = 3
let empty_str=''
for(let i =0;i<word.length;i++){
   let code  = word.charCodeAt(i)
   code = code + shift
   
    empty_str = empty_str + String.fromCharCode(code)

}
console.log(word);
console.log(empty_str);

