// // Q1. Print all prime numbers between 1 and 200. Then count how many there are and display the sum.
// let sum=0;
// let primecount = 0
// for(let i=0;i<=200;i++){
//   let count =0
//   for(let j=1;j<=i;j++){
//     if(i%j===0){
//         count++
//     }
//   }
//   if(count===2){
//     console.log(i);
    
//      primecount++
//      sum = sum+i

//   }
// }
// console.log("Total Prime Numbers:", primecount);

// console.log("Sum of Prime Numbers:", sum);

// ----------------------------------------------
// Print tables from 1 to 12

// for (let i = 1; i <= 12; i++) {

//     for (let j = 1; j <= 10; j++) {

//         console.log(`${i} * ${j} = ${i * j}`);
//     }

// }
// ----------------------------------------

// let arr = [12,43,17,54,89,10]
// let n =arr.length;
// for(let i=0;i<n-1;i++){
//    for(let j=0;j<n-i-1;j++){
//     if(arr[j]>arr[j+1]){
//         let temp = arr[j]
//         arr[j] = arr[j+1]
//         arr[j+1] = temp
//     }
//    }
// }
// for(let i=0;i<arr.length;i++){
//     console.log(arr[i]);  
// }

for(let i=0;i<=4;i++){
  let patt= ''
  for(let j=0;j<=4-i;j++){
       patt = patt+ j 
  }
  console.log(patt);
  
}