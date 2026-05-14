// Q11. Swap two variables without using a third variable. Implement three different approaches (XOR,
// arithmetic, destructuring).

// Approach 1: XOR
function swapXOR(a, b) {
	a = a ^ b; // Step 1: a now holds the result of a XOR b	
	b = a ^ b; // Step 2: b now holds the original value of a
	a = a ^ b;
	// Step 3: a now holds the original value of b
	return [a, b];
}	
console.log(swapXOR(10,20))
// Approach 2: Arithmetic
function swapArithmetic(a, b) {
	a = a + b; // Step 1: a now holds the sum of a and b	
	b = a - b; // Step 2: b now holds the original value of a
	a = a - b; 
	return [a,b]
}
console.log(swapArithmetic(12,34))

// destructuring 
function destructure(a,b){
  [a,b]=[b,a]
  return [a,b]
}
console.log(destructure(30,50))


