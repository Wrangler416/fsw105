var fruit = ["banana", "apple", "orange", "watermelon"];
var vegetables = ["carrot", "tomato", "pepper", "lettuce"];

//1. 
var end = vegetables.pop();
//2. 
var firstFruit = fruit.shift();
//3. 
var indexO = fruit.indexOf("orange"); 
//4. 
var addToEnd = fruit.push("1");
//5. 
var vegLength = vegetables.length; 
//6. 
var toEnd = vegetables.push("3"); 
//7. 
var food = fruit.concat(vegetables);
//8. 
var remove = food.splice(4, 2);
//9. 
var reverseArr = food.reverse(); 
//10. 
console.log(food.toString());

