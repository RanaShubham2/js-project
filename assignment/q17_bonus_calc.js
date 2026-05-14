
// Q9. Write an employee bonus system: Performance > 90% gets 30% bonus, > 75% gets 20%, > 60% gets
// 10%, else no bonus. Years > 5 get extra 5%.
function calc_bonus(salary, performance, year) {
    let bonus = 0
    if (performance > 90) {
        bonus = 30
    }
    else if (performance > 75) {
        bonus = 20
    }
    else if (performance > 60) {
        bonus = 10
    }
    else {
        console.log('you are not eligible for bonus');
    }
    if (year > 5) {
        bonus = bonus + 5;
    }
   
    let bonusAmount = (salary * bonus) / 100;

    let finalSalary = salary + bonusAmount;
    console.log("Salary:", salary);
    console.log("Performance:", performance + "%");
    console.log("Years of Service:", year);
    console.log("Total Bonus:", bonus + "%");
    console.log("Bonus Amount:", bonusAmount);
    console.log("Final Salary:", finalSalary);

}
calc_bonus(100000,90,4)