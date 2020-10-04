//ES6
//1. 
function runForLoop(pets) {
    const myName = "John"
    let name = "name"
    let age = 101
    let petObjects = []
    for (let i = 0; i < pets.length; i++) {
        const pet = {type: pets[i] }
        name; 
        if (pets[i] === "cat") {
            name = "fluffy"
        } else {
            name = "spot"
        }
        console.log("pet name: ", name)
        pet.name = name
        petObjects.push(pet)
    }
    console.log("man name: ", myName)
    return petObjects
}
runForLoop(["cat", "dog"]);

//2. 

const carrots = ["bright orange", "ripe", "rotten"]

function mapVegetables(arr) {
    return arr.map(function(carrot){
        return { type: "carrot, name: carrot "}
    })
}


//3. 

const people = [
    {
        name: "Princess Peach",
        friendly: false
    },
    {
        name: "Luigi", 
        friendly: true
    },
    {
        name: "Mario",
        friendly: true
    }, 
    {
        name: "Bowser",
        friendly: false
    }
]

const filterFriendly = people.filter (people => people.friendly === true)

console.log(filterFriendly)

//4. 

let doMathSum = (a, b) => a + b;

let produceProduct = (a, b) => a * b;

console.log(doMathSum(4, 8));
console.log(produceProduct(6, 7));


//5. 

let printString = (firstName = "Jane", lastName = "Doe", age = 100) => "Hi" + " " + firstName + " " + lastName + ", " + "how does it feel to be" + " " + age +"?"; 

console.log(printString("Kat", "Stark", 40));


//6.


let printedString = (fName = "Jane", lName = "Doe", age = 100) => `Hi ${fName} ${lName}, how does it feel to be ${age}?`;

console.log(printedString("Kat", "Stark", 40));


//7. 

const animals = [
    {
        type: "dog",
        name: "theodore"
    },
    {
        type: "cat", 
        name: "whiskers"
    },
    {
        type: "pig",
        name: "piglette"
    },
    {
        type: "dog",
        name: "sparky"
    } 
];

const filterDogs = animals.filter(animal => animal.type === "dog")
console.log(filterDogs)

//8.  

let number8 = (firstname = "Janice", location = "Hawaii") => `Hi, ${firstname}! \n Welcome to ${location}.\n I hope you enjoy your stay. Please ask the president of ${location} if you need anything`

console.log(number8("Janice", "Hawaii"));

