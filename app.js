// Battle Ship ///////////////////////////////////////////////////////////////////////////

// Your Ship
class USS_Schwarzenegger {
  constructor() {
    this.hull = 20;
    this.firepower = 5;
    this.accuracy = .7
  }

  attack() {
    if (this.accuracy < Math.random()) {
      invader.hull -= this.firepower;
      alert(`YOUR ATTACK WAS SUCCESSFUL! \n\n PREPARE FOR INCOMING ATTACK...`)
    } else {
      alert(`YOUR ATTACK FAILED! \n\n PREPARE FOR INCOMING ATTACK...`)
    }
  }
}

const defender = new USS_Schwarzenegger()


// Alien Ship
class Alien {
  constructor() {
    this.hull = Math.floor(Math.random() * (7 - 3) + 3)
    this.firepower = Math.floor(Math.random() * (5 - 2) + 2)
    this.accuracy = Math.random() * (.8 - .6) + .6
  }
  attack() {
    if (this.accuracy > .6 && this.accuracy < .8) {
      defender.hull -= this.firepower;
      alert(`YOU'VE BEEN HIT`)
    } else {
      alert(`NOT EVEN A SCRATCH`)
    }
  }
}

const invader = new Alien()


// Initiate Game
const init = () => {
  alert('Welcome to SPACE+++BATTLE!');
  const response = prompt(`Enter 'p' to play or 'q' to exit.`);
  if (response.toLowerCase() === 'q') {
    alert(`Good-bye!`)
  } else if (response.toLowerCase() === 'p') {
    alert('Earth has been attacked by a horde of aliens!\n\nYou are the captain of the USS Schwarzenegger.\n\nYour mission is to destroy every last alien ship.')
    lockAndLoad()
  } else {
    alert(`I don't understand your response.\n\nTry again next time!`)
  }
}


// Check Status
const status = () => {
  alert(`Your Status >>> HULL: ${defender.hull} | FIREPOWER: ${defender.firepower} | ACCURACY: ${defender.accuracy*100}%\n\nAlien#${invaderCount} Status >>> HULL: ${invader.hull} | FIREPOWER: ${invader.firepower} | ACCURACY: ${Math.floor(invader.accuracy*100)}%`)
}


// Get Ready to Battle
let invaderCount = 6;

const lockAndLoad = () => {

  status()

  if (invaderCount < 1 && defender.hull > 0) {
    alert(`YOU HAVE DEFEATED ALL ALIENS`)
  } else if (invaderCount > 0 && defender.hull < 1) {
    alert(`YOU LOSE!`)
  } else if (invaderCount < 1 && defender.hull < 1) {
    alert(`TIE GAME!`)
  }

  while (invaderCount > 1 && defender.hull > 0) {
    if (invader.hull < 1) {
      invaderCount--
      invader.hull = Math.floor(Math.random() * (7 - 3) + 3)
    }

    const response = prompt(`Enter 'a' to attack or 'q' to retreat`)
    if (response.toLowerCase() === 'q') {
      alert(`YOU LOSE!`)
      defender.hull = 0;
      defender.firepower = 0;
      defender.accuracy = 0;
      status()
    } else if (response.toLowerCase() === 'a') {
      engage()
    } else {
      alert(`I don't understand your response.\n\n Try again next time!`)
    }
  }
}


// Battle
const engage = () => {
  defender.attack();
  invader.attack();
  lockAndLoad();
}


init(); // Initialize