var readlineSync = require('readline-sync');

const playerName = readlineSync.question("Please enter your name");

const welcome = `Welcome ${playerName} to the Escape Room Simulation Game!`;
console.log(welcome);

let alive = true; 
let hasKey = false; 

while(alive == true) {
    const menu = readlineSync.keyIn(`Press 1 to Put hand in the hole \n Press 2 to Find the Key \n Press 3 to Open the Door`, {limit:'$<1-3>'})

        if (menu == 1) {
            console.log(`Too bad ${playerName} you chose the wrong answer, Game Over!`)
            alive = false;
        }
        else if (menu == 2 && hasKey == false) {
            console.log(`Excellent choice, ${playerName} You now have the key...`)
            hasKey = true; 
        }
        else if (menu == 2 && hasKey == true) {
            console.log(`${playerName}, you've already found the key, now use it!`)
        }
        else if (menu == 3 && hasKey == false) {
            console.log(`${playerName}, you need to locate the key first!`)
        }
        else if (menu == 3 && hasKey == true) {
            console.log(`${playerName}, Congratulations! You win the game. You may open the door!`)
            alive = false; 
        }

}

