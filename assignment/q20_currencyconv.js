
// Q26. Create a multi-currency converter with special rules: some currencies have fixed hours, some have fees,
// using nested conditions.

function currencyConverter(amount, currency, hour){
    let convertedamount
    if(currency==='usd'){
          if (hour >= 9 && hour <= 17) {

            // Convert usd to inr
            convertedAmount = amount * 83;

            console.log("USD Converted Amount: ₹" + convertedAmount);
        }
        else {
            console.log("USD exchange available only between 9 AM to 5 PM");
        }
    }
        else if (currency === "EUR") {

        // Convert eur to inr
        convertedAmount = amount * 90;

        // 2% transaction fee
        let fee = convertedAmount * 2 / 100;

        convertedAmount = convertedAmount - fee;

        console.log("EUR Converted Amount after 2% fee: ₹" + convertedAmount);
    }
     else {
        console.log("Currency not supported");
    }
}
currencyConverter(2000,'usd',14)