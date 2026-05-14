// Q13. Write a function safeDivide(a, b) that uses the nullish coalescing operator to handle division by zero
// gracefully.
function safedivide(a, b) {
    let result = b === 0 ? null : a / b

    return result ?? 'cannot divide zero'
}

console.log(safedivide(10, 2))