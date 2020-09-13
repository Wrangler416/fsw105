var peopleWhoWantToSeeMadMaxFuryRoad = [
    {
        name: "Mike", 
        age: 12,
        gender: "male"
    }, {
        name: "Madeline",
        age: 80,
        gender: "female"
    }, {
        name: "Cheryl",
        age: 22,
        gender: "female"
    }, {
        name: "Sam",
        age: 30,
        gender: "male"
    }, {
        name: "Suzi",
        age: 4,
        gender: "female"
    }
]

//1 
for (var i = 0; i < peopleWhoWantToSeeMadMaxFuryRoad.length; i++){
     for(var j = 0; j < peopleWhoWantToSeeMadMaxFuryRoad[i].length; j++){
    }

    if (peopleWhoWantToSeeMadMaxFuryRoad[i].age >= 18){
        console.log("is old enough")
    } else {
        console.log("not old enough") } 
}
    
//2
for (var i = 0; i < peopleWhoWantToSeeMadMaxFuryRoad.length; i++){
    for(var j = 0; j < peopleWhoWantToSeeMadMaxFuryRoad[i].length; j++){
   }

    if (peopleWhoWantToSeeMadMaxFuryRoad[i].age >= 18) {
        console.log(peopleWhoWantToSeeMadMaxFuryRoad[i].name + " " + "is old enough to attend Mad Max")
    } else {
        console.log(peopleWhoWantToSeeMadMaxFuryRoad[i].name + " " + "is NOT old enough to attend Mad Max")
}
}
//3.
for (var i = 0; i < peopleWhoWantToSeeMadMaxFuryRoad.length; i++){
    for(var j = 0; j < peopleWhoWantToSeeMadMaxFuryRoad[i].length; j++){
   }

   if (peopleWhoWantToSeeMadMaxFuryRoad.age >= 18) 
     {
        if(peopleWhoWantToSeeMadMaxFuryRoad[i].gender == "male") {
            console.log(peopleWhoWantToSeeMadMaxFuryRoad[i].name + " " + "is old enough. HE can see Mad Max Fury Road.")
        } else {
       console.log(peopleWhoWantToSeeMadMaxFuryRoad[i].name + " " + "is NOT old enough. HE cannot see Mad Max Fury Road.")}
        }
       if (peopleWhoWantToSeeMadMaxFuryRoad[i].gender == "female") {
        console.log(peopleWhoWantToSeeMadMaxFuryRoad[i].name + " " + "is old enough. SHE can see Mad Max Fury Road")
       } else {
        console.log(peopleWhoWantToSeeMadMaxFuryRoad[i].name + " " + "is NOT old enough. SHE cannot see Mad Max Fury Road") }
}

//4. 

for (var i = 0; i < 101; i++) {
    if (i % 2 == 0) {
        console.log("even")
    } else {
        console.log("odd")
    }
}




