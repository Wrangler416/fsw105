if(5 > 3) {
    console.log("is greater than")
};
let cat = 3;
if(cat === 3) {
    console.log("is the length")
};

if("cat" === "dog") {
    console.log("same")
} else {
    console.log("not the same")
}

var person = {
    name: "Bobby",
    age: 12,
};

if("age" >= 18) {
    console.log(person.name, "is allowed to attend the movie")
} else {
    console.log(person.name, "is not allowed to attend this movie")
}  
if(person.name.startsWith("B")) {
    console.log(person.name + " " + "can enter")
} else {
    console.log(person.name + " " + "cannot enter")
}
if("age" >= 18 && person.name.startsWith("B")) {
    console.log(person.name + " " + "you may enter")
} else {
    console.log(person.name + " " + "cannot enter")
}



if(1 === 1) {
    console.log("strict")
}
if(1 == 1) {
    console.log("loose")
} else {
    console.log("not equal at all")
}

if(1 <= 2 && 2 === 4) {
    console.log("yes")
}


console.log(typeof "dog");
console.log(typeof true);


