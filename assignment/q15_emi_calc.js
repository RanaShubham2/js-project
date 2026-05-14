// Q16. Create a loan EMI calculator: EMI = P × r × (1+r)■ / ((1+r)■-1). Accept principal, annual rate, months as
// parameters.

function calc_emi(principle,annualRate,months){
 let r = annualRate / 12 / 100;
//  let a = (principle*r*time)/100
    let emi =
        (principle * r * (1 + r) ** months) /
        ((1 + r) ** months - 1);
 console.log('your emi is:',emi);
 
}
calc_emi(100000,12,12)