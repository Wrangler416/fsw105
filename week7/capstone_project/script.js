const readlineSync = require('readline-sync');

const welcome = `Welcome to the Amazon Surviver Game!`;
console.log(welcome);

const playerName = readlineSync.question("Please enter your name");

const welcome2 = readlineSync.question("Welcome" + playerName + ", we are headed into the depths of the Amazon! Let's see if you have what it takes to survive, Press Enter to continue"); 
console.log(welcome2);

const enemies = ["Jaguar", "Anaconda", "Caiman", "Posion Dart Frog", "Piranha"];
const healing = ["Wasai", "Tawari", "Lapacho", "Sodo"];
const menu = ["Walk", "Rescue Me", "Inventory"]
let award = []; 

let playerHealth = 50;
let lottery = healing[Math.floor(Math.random() * healing.length)];


function game() {
    const playerKillPower = Math.floor(Math.random() * (10 + 6 * 2)); 
    const enemyKillPower = Math.floor(Math.random() * (7 - 2 * 6)); 

    let enemy = enemies[Math.floor(Math.random() * enemies.length)];
    let enemyHealth = 50; 

    const option = readlineSync.keyInSelect(menu, "Choose one of the following options");

    if (menu[option] == "Rescue Me") {
        return playerHealth = 0; 
    } else if (menu[option] == "Inventory") {
        console.log(playerName + "" + "Health = " + playerHealth + ":\n Healers Collected = " + healing)
    } else if (menu[option] == "Walk"){
        let chance = Math.random();
        if(chance <= .2) {
            console.log("Walking . . .");
        } else if (chance >= .2) {
            console.log("Uh oh, a/an" + enemy + "has appeared!");

            while(enemyHealth > 0 && playerHealth > 0) {

                const choice = readlineSync.question("What are you going to do?! You can try to escape or you can fight. Press e to escape and f to fight!");
                    switch(choice) {

                        case 'e':
                            const escape = Math.random();
                        if(run <.5) {
                            console.log("Oh no, you were not fast enough!" + enemy + "has attacked you with" + enemyKillPower);
                        } else {
                            console.log("Awesome, you got away! This time...");
                            break;
                        }

                        case 'f':
                            enemyHealth - playerKillPower;
                            console.log("Nice!, you attacked" + enemy + "with" + playerKillPower + "of power!");

                            playerHealth - enemyKillPower; 
                            console.log("Your enemy," + " " + enemy + " " + "attacked with" + enemyKillPower); 

                            if(enemyHealth <= 0) {
                                console.log("You killed" + " " + enemy + " " + "You are rewarded with" + lottery); 
                                let prize = Math.random();
                                if(price <= .5) {
                                    award.push(lottery);
                                }
 
                            } else if(playerHealth <= 0) {
                                console.log("The jungle has defeated you, game over")
                            }



                    }
            }
        }

    }

}
while(playerHealth > 0) {
    playerRestore = function() {
    playerAlive = true; 
    playerHealth = 50; 
    };

    playerRestor();
    game(); 
};





