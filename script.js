// declare variables
let doorImage1 = document.getElementById('door1');
let doorImage2 = document.getElementById('door2');
let doorImage3 = document.getElementById('door3');

let botDoorPath = 'https://content.codecademy.com/projects/chore-door/images/robot.svg';
let beachDoorPath = 'https://content.codecademy.com/projects/chore-door/images/beach.svg';
let spaceDoorPath = 'https://content.codecademy.com/projects/chore-door/images/space.svg';
let closedDoorPath = 'https://content.codecademy.com/projects/chore-door/images/closed_door.svg'

let numClosedDoors = 3;
let openDoor1
let openDoor2
let openDoor3

let startButton = document.getElementById('start')
let currentlyPlaying = true

let player = document.getElementById('player')
let bot = document.getElementById('bot')
let playerScore = 0
let botScore = 0

isBot = (door) => {
    if (door.src === botDoorPath) {
        return true;
    } else {
        return false;
    }
}

isClicked = (door) => {
    if (door.src === closedDoorPath) {
        return false;
    } else {
        return true;
    }
}

// reduce numClosedDoors on each click
playDoor = (door) => {
    numClosedDoors--
    if (numClosedDoors === 0) {
        gameOver('win');
        playerScore++;
        player.innerHTML = playerScore
    } else if (isBot(door)) {
        gameOver();
        botScore++;
        bot.innerHTML = botScore
    }
}

// reveal image on click
doorImage1.onclick = () => {
    if (isClicked(doorImage1) === false && currentlyPlaying) {
        doorImage1.src=openDoor1;
        playDoor(doorImage1);
    }
}

doorImage2.onclick = () => {
    if (isClicked(doorImage2) === false && currentlyPlaying) {
        doorImage2.src=openDoor2;
        playDoor(doorImage2);
    }
}

doorImage3.onclick = () => {
    if (isClicked(doorImage3) === false && currentlyPlaying) {
        doorImage3.src=openDoor3;
        playDoor(doorImage3);
    }
}

startButton.onclick = () => {
    if (currentlyPlaying === false) {
        startRound();
    }
}

startRound = () => {
    doorImage1.src = closedDoorPath
    doorImage2.src = closedDoorPath
    doorImage3.src = closedDoorPath
    numClosedDoors = 3
    startButton.innerHTML = 'Good luck!'
    currentlyPlaying = true
    randomChoreDoorGenerator()
}

// ending the game
gameOver = (status) => {
    if (status === 'win') {
        startButton.innerHTML = 'You win! Play again?'
    } else {
        startButton.innerHTML = 'Game over! Play again?'
    }
    currentlyPlaying = false
}

//randomly generate the doors
randomChoreDoorGenerator = () => {
    const choreDoor = Math.floor(Math.random() * numClosedDoors);
    if (choreDoor === 0) {
        openDoor1 = botDoorPath;
        openDoor2 = beachDoorPath;
        openDoor3 = spaceDoorPath;
    } else if (choreDoor === 1) {
        openDoor1 = beachDoorPath;
        openDoor2 = botDoorPath;
        openDoor3 = spaceDoorPath;
    } else {
        openDoor1 = beachDoorPath;
        openDoor2 = spaceDoorPath;
        openDoor3 = botDoorPath;
    }
}
startRound()
