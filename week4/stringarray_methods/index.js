//1. 
var newString = "Hello"
var upper = newString.toUpperCase()
var lower = newString.toLowerCase()
console.log(upper + lower)
//2.  
var number = "136944"
var numberHalf = number.slice(0, 3)
var numberHalfRounded = Math.floor(numberHalf)
console.log(numberHalfRounded)
//3. 
var nextString = "Web Development"
var halfLength = Math.ceil(nextString.length / 2); 
var splicedString = nextString.slice(0, halfLength);
console.log(splicedString);
//4. 
var lastString = "Full Stack Web Development"
var firstHalf = lastString.slice(0, lastString.length / 2); 
var lastHalf = lastString.slice(lastString.length / 2);
var capFirst = firstHalf.toUpperCase();
var capLast = lastHalf.toLowerCase();
console.log(capFirst + capLast);





