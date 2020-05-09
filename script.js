const doorImage1 = document.getElementById('door1');
const doorImage2 = document.getElementById('door2');
const doorImage3 = document.getElementById('door3');
const botDoorPath = "https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/robot.svg";
const beachDoorPath = "https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/beach.svg";
const spaceDoorPath = "https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/space.svg";
const closedDoorPath ="https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/closed_door.svg";
let numClosedDoors = 3;
let openDoor1="";
let openDoor2="";
let openDoor3="";
let currentlyPlaying = true;
let score = 0;
let highScore = 0;
let currentStreak = document.getElementById('score-number');
let bestStreak = document.getElementById('high-score-number');
let choreDoor = Math.floor(Math.random() * 6);
currentStreak.innerHTML = score;
bestStreak.innerHTML = highScore;
const startButton = document.getElementById('start');
const playDoor = (door) => {
    numClosedDoors --;
    if(numClosedDoors === 0){
        gameOver('win');
    }else if(isBot(door)){
        gameOver('lose');
    }
}
const isBot = (door) => {
    if(door.src === botDoorPath){
        return true;
    }else{
        return false;
    }
}
const isClicked = (door) => {
    if(door.src === closedDoorPath){
        return false;
    }else{
        return true;
    }
}
const randomChoreDoorGenerator = () => {
    choreDoor = Math.floor(Math.random() * 6);
    switch (choreDoor) {
      case 0:
        openDoor1 = botDoorPath;
        openDoor2 = beachDoorPath;
        openDoor3 = spaceDoorPath;
        break;
      case 1:
        openDoor1 = botDoorPath;
        openDoor2 = spaceDoorPath;
        openDoor3 = beachDoorPath;
        break;
      case 2:
        openDoor2 = botDoorPath;
        openDoor1 = beachDoorPath;
        openDoor3 = spaceDoorPath;
        break;
      case 3:
        openDoor2 = botDoorPath;
        openDoor1 = spaceDoorPath;
        openDoor3 = beachDoorPath;
        break;
      case 4:
        openDoor3 = botDoorPath;
        openDoor1 = beachDoorPath;
        openDoor2 = spaceDoorPath;
        break;
      case 5:
        openDoor3 = botDoorPath;
        openDoor1 = spaceDoorPath;
        openDoor2 = beachDoorPath;
        break;
    }
  }
  
doorImage1.onclick = () => {
    if(!isClicked(doorImage1) && currentlyPlaying){
        doorImage1.src = openDoor1;
        playDoor(doorImage1);
    }
}
doorImage2.onclick = () => {
    if(!isClicked(doorImage2) && currentlyPlaying){
        doorImage2.src = openDoor2;
        playDoor(doorImage2);
    }
}
doorImage3.onclick = () => {
    if(!isClicked(doorImage3) && currentlyPlaying){
        doorImage3.src = openDoor3;
        playDoor(doorImage3);
    }
}
startButton.onclick =() =>{
    if(!currentlyPlaying){
        startRound();
    }
}
const startRound = () => {
    numClosedDoors = 3;
    doorImage1.src = closedDoorPath;
    doorImage2.src = closedDoorPath;
    doorImage3.src = closedDoorPath;
    startButton.innerHTML = 'Good luck!';
    currentlyPlaying = true;
    randomChoreDoorGenerator()
}
const gameOver = (status) =>{
    if(status === 'win'){
        startButton.innerHTML = 'You win! Play again?';
        getScore();
    }else{
        startButton.innerHTML = 'Game over! Play again?';
        score = 0;
        currentStreak.innerHTML = score;
    }
    currentlyPlaying = false;
}
const getScore = () => {
    score++;
    currentStreak.innerHTML = score;
    if (score > highScore) {
      highScore = score;
      bestStreak.innerHTML = highScore;
    }
  }
startRound();