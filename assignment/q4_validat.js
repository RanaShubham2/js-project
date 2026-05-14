
function isValidAge(age){
     if (typeof age === "number" && !isNaN(age) && age >= 0) {
        return true;
    } else {
        return false;
    }
}
console.log(isValidAge())

