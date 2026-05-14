
function calc_salary(salary){
 let hra = (salary*40)/100
 console.log('hra is:',hra);

 let dra = (salary*20)/100
 console.log('dra is:',dra);

 let pf = (salary*12)/100
  console.log('pf deduction is:',pf);

  let net_sal = (salary+(hra+dra)-(pf))
  console.log('net salary is:',net_sal);
    
}
calc_salary(10000);
