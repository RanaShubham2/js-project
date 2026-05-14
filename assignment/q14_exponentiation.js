// Q21. Implement a compound interest calculator that uses the exponentiation operator (**) and shows
// year-by-year growth.

function compoundInterest(principal, rate, years) {

    for (let i = 1; i <= years; i++) {

       
        let amount = principal * (1 + rate / 100) ** i;

        console.log("Year " + i + ": ₹" + amount.toFixed(2));
    }
}


compoundInterest(1000, 10, 5);