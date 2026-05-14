
// Q1. Write an ATM simulation: Check if PIN is correct (1234), then check if balance >= withdrawal amount, then
// deduct. Handle all error cases.
function atm_simulation(pin,amount){
  let set_pin = 1234
  let set_balance=10000
  if(set_pin!==pin){
     console.log('enter correct pin');
     return
  }else if(amount>=set_balance){
   console.log('balance is too low for withdrawle');
   return
  }else{
    console.log(`${amount} is deduct from your account`);
    let c_balance= (set_balance-amount)
    console.log(`${c_balance} is your cuerrent balance` );
    
  }
}
atm_simulation(1234,2000)