
// PASS BY VALUE (Primitive Data Types)

let a = 10;
let b = a;   // Copy of value

b = 20;

console.log("Primitive Example:");
console.log("a =", a); // 10
console.log("b =", b); // 20

console.log("--------------------------------");

// PASS BY REFERENCE (Objects / Arrays)

let student1 = {
    name: "Shubham",
    age: 20
};

let student2 = student1; // Reference copied

student2.age = 25;

console.log("Object Example:");
console.log("student1 =", student1);
console.log("student2 =", student2);

console.log("--------------------------------");

// ARRAY EXAMPLE

let arr1 = [1, 2, 3];

let arr2 = arr1; // Reference copied

arr2.push(4);

console.log("Array Example:");
console.log("arr1 =", arr1);
console.log("arr2 =", arr2);

