// //     Q6. Reverse a number using a loop (e.g., 12345 → 54321). Check if it equals the original to detect palindrome
// // numbers.


// let number = 12345
// // let n = number.toString()
// let reverse = 0;


// for(let i=1;i<=number.length;i++){
//    let digit = i % 10;
//    console.log(digit);
//     reverse = reverse * 10 + digit;   
// }
// console.log(reverse);


// // let num = 321653333
// //   let digit = num % 10;
// //   console.log(digit);
// //   let  reverse=0
// //   reverse = reverse * 10 + digit;
// // console.log(reverse);
// Reverse Number and Check Palindrome

let number = 12321;

let original = number;

let reverse = 0;


while (number > 0) {

    let digit = number % 10;

    reverse = reverse * 10 + digit;

    number = Math.floor(number / 10);
}


console.log("Reversed Number:", reverse);

if (original === reverse) {

    console.log("Palindrome Number");

}
else {

    console.log("Not a Palindrome Number");
}
