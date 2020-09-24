// Section A
// 1. 
function fiveAndGreaterOnly(arr){
    const result = arr.filter(function(num){
        if(num >= 5){
        return true;
        };
});
        return result; 
};
console.log(fiveAndGreaterOnly([3, 6, 8, 2]));

//2. 
function evensOnly(arr){
    const result = arr.filter(function(num){
        if(num % 2 === 0){
            return true; 
        };
    });
        return result;
}; 
console.log(evensOnly([3, 6, 8, 2]));


//Section B
//1.

function doubleNumbers(arr){
    const result = arr.map(function(num){
        return num * 2; 
    });
        return result;
};
console.log(doubleNumbers([2, 5, 100]));

//2. 

function stringItUp(arr){
    const result = arr.map(function(num){
        return num.toString();
    });
        return result;
};
console.log(stringItUp([2, 5, 100]));

//3. 

function capitalizeNames(arr){
    const result = arr.map(function(arr){
        return arr.charAt(0).toUpperCase() + arr.slice(1); 
    });
        return result;
}; 

console.log(capitalizeNames(["john", "JACOB", "jinGleHeimer", "schmidt"]));


//Section C
//1.

const numbers = [1, 2, 3]

const result = numbers.reduce(function(final, num){
        final += num
        return final;
    });

console.log(result); 

//2. 

const stringConcat = [1, 2, 3];

console.log(stringConcat.join());

// function stringConcat(arr){
//     const result = stringConcat.reduce(function(string){
//     return result.join()
//     });
//     return result; 
// };
// console.log(stringConcat([1, 2, 3])); 


//3.

var voters = [
    {name: "Bob", age: 30, voted: true},
    {name: "Jake", age: 32, voted: true},
    {name: "Kate", age: 25, voted: false},
    {name: "Sam", age: 20, voted: false},
    {name: "Phil", age: 21, voted: false},
    {name: "Ed", age: 55, voted: true}, 
    {name: "Tami", age: 54, voted: true},
    {name: "Mary", age: 31, voted: false}, 
    {name: "Becky", age: 43, voted: false},
    {name: "Joey", age: 41, voted: true},
    {name: "Jeff", age: 30, voted: true}, 
    {name: "Zack", age: 19, voted: false}
]

const count = voters.filter(function(item){
    if (item.voted === true) {
      return true;
    } else {
      return false;
    }
  }).length; 

  console.log(count); 

//Section D
//1. 

function leastToGreatest(arr) {
    const result = arr.sort(function(a, b){
        return a - b
    });
        return result;
};
console.log(leastToGreatest([1, 3, 5, 2, 90, 20]));

//2. 

function greatestToLeast(arr) {
    const result = arr.sort(function(a, b){
        return b - a
    });
        return result;
};
console.log(greatestToLeast([1, 3, 5, 2, 90, 20]));

//3. 

function lengthSort(arr) {
    const result = arr.sort(function(a, b){
        return a.length - b.length
    });
        return result;
};
console.log(lengthSort(["dog", "wolf", "by", "family", "eaten"]));

// Extra Credit

const words = ["dog", "wolf", "by", "family", "eaten"];
const sorted = words.sort();

console.log(sorted);




