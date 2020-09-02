if(5 > 3) {
    console.log("is greater than")
};
let cat = 3;
if(cat === 3) {
    console.log("is the length")
};

if("cat" !== "dog") {
    console.log("not the same")
};

var person = {
    name: "Bobby",
    age: 12,
};

var grabProperty = Object.getOwnPropertyDescriptor(person, "name");

if("age" >= 18) {
    console.log(grabProperty.value, "is allowed to attend the movie")
} else {
    console.log(grabProperty.value, "is not allowed to attend this movie")
}

if(name.charAt(0) === "B") {
    console.log(grab.value, "is allowed to attend the movie")
}

