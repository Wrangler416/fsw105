// Bullet 1. 

function sum(num1, num2) {
    return num1 + num2
}
var result = sum(5, 5); 

console.log(result); 


// Bullet 2.

console.log(Math.max(4, 6, 8)); 

// Bullet 3. 

function oddEven(j) {
    if(j % 2 == 0) {
        return "even";
    } else if(j % 2 == 1) {
        return "odd";
    }
}
console.log(oddEven(10)); 
console.log(oddEven(3)); 

// Bullet 4. 

function stringMerge(str) {
    if(str.length <= 20) {
        return str + str; 
    } else if(str.length > 20) {
        return str.slice(0, str.length / 2)
    }
}
console.log(stringMerge("javascript"));
console.log(stringMerge("welcome to javascript")); 

