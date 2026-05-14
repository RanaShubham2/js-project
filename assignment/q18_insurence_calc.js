// Q11. Create an insurance premium calculator: Based on age, health condition, and coverage type. Use
// nested if-else for each factor.
function calc_insurence(age, health, coverage) {
    let primium = 5000
    if (age < 25) {
        primium += 1000
        if (health === 'good') {
            primium += 1000
        } else if (health === "average") {
            primium += 3000;
        } else {
            primium += 5000;
        }
    }else if(age<=40){
        primium += 2000

        if(health === 'good'){
            primium+=1000
        }
        else if(health ==='average'){
            primium +=3000
        }else {
            primium += 5000;
        }
    }else{
          primium += 4000;
            if (health === "good") {
            primium += 1000;
        }
        else if (health === "average") {
            primium += 3000;
        }
        else {
            primium += 5000;
        }
    }
     if (coverage === "basic") {
        primium += 2000;
    }
    else {
        primium += 5000;
    }
    console.log("Age:", age);
    console.log("Health:", health);
    console.log("Coverage:", coverage);
    console.log("Final Premium: ₹" + primium);
}
calc_insurence(35,'good','basic')