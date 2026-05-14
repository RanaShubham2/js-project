// Q20. Create a function that returns different reference types (object, array, function) and uses typeof and
// instanceof to identify each.
function getreferncetype(type) {
    if (type === 'object') {
        return {
            'name': 'shubham',
            'marks': 22
        }
    }
    else if (type === 'array') {

        return [123, 55, 11, 77]
    }
    else if (type === 'function') {
        return function () {
            console.log('helo me');

        }
    }
    else {
        return null
    }
}

let obj = getreferncetype('object')
console.log(obj);
console.log(typeof(obj));
console.log(obj instanceof Object );

let arr = getreferncetype('array')
console.log(arr);
console.log(typeof(arr));
console.log(arr instanceof Array);


let fun = getreferncetype('function')
console.log(fun)
console.log(typeof(fun));
console.log(fun instanceof Function);

;




