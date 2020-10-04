//ES6
//1. 
function runForLoop(pets) {
    const myName = "John"
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

// function filterForFriendly(arr) {
//     return arr.filter(function(person) {
//         return person.friendly
//     })
// }

const filterFriendly = people.filter (people => people.friendly === true)

console.log(filterFriendly)

//4. 

let doMathSum = (a, b) => a + b;

let produceProduct = (a, b) => a * b;


//5. 

const person = {
    fname: "Jane",
    lname: "Doe",
    age: 100
}

function printString() {
    console.log(`Hi ${person.fname + person.lname} how does it feel to be ${person.age}?`)
}

//6.

const printStrings = 
`Hi ${person.fname + person.lname} how does it feel to be ${person.age}?`

console.log(printStrings)

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

// function filterForDogs(arr) {
//     return arr.filter(animal => {
//         if (animal.type === "dog") {
//             return true
//         } else {
//             return false
//         }
//     })
// }

const filterDogs = animals.filter(animal => animal.type === "dog")
console.log(filterDogs)

//8.  

const firstname = "Janice"
const location = "Hawaii"

function ns() 
{ return "I hope you enjoy your stay. Please ask the president of"; }
console.log(`Hi, ${firstname}. Welcome to ${location}. ${ns()} ${location} if you need anything.`);

