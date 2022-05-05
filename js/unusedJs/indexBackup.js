//* VARIABLES

let map = document.getElementById("map");
let persoVar = document.getElementById("persoId");

//* LOOK IF THE CURSOR MOVES

let screenLog = document.querySelector('body');
document.addEventListener('mousemove', logKey, game);

//* GET CURSOR POSITION

let mouseX = -1;
let mouseY = -1;

function logKey(e) {
  mouseX = e.pageX;
  mouseY = e.pageY;
  return mouseX;
}

//* GAME FUNCTION CALLED EVERY 10MS

setInterval(game, 10); //Set the interval at 10ms

//* WAIT ONE SECOND BEFORE ALLOWING PLAYER TO MOVE TO PREVENT BUG WITH CAMERA

setTimeout(playing, 1000); //Set a 1second timeout before starting function playing

playing = false;

persoId.scrollIntoView({block: "center", inline: "center"}); //Center the camera on the player

function playing () { //Set playing to true after end of timeout (1second) so now player can move
  playing = true;
}

//* FUNCTION TO MAKE PLAYER ABLE TO MOVE

let running = false;

function game(){
  if (playing) {
    //Get player x and y position
    let persoX = persoId.offsetLeft;
    let persoY = persoId.offsetTop;  

    //Get cursor postion relative to the player position
    let dx = mouseX - persoX;
    let dy = mouseY - persoY;

    //Compute the velocity x and y of the player
    const magnitude = 100;

    let velX = dx / magnitude; 
    let velY = dy / magnitude;

    if (velX > 0.49) {
      running = true;
    } else {
      running = false;
    }

    //Apply the new position to the player
    persoId.style.left = persoX + velX + "px";
    persoId.style.top = persoY + velY + "px";

    //Center camer on player
    persoId.scrollIntoView({block: "center", inline: "center"});

    //Debuging
    //console.log(`deltaX: ${velX} deltaY: ${velY}`);
  } else {
    console.log("not playing");
  }

  return running;

}

//* SPRITESHEETS

var animationInterval;
var spriteSheet = document.getElementById("persoId");
var widthOfSpriteSheet = 1200;
var widthOfEachSprite = 200;

function stopAnimation() {
  clearInterval(animationInterval);
}

function startAnimation() {
  if (running) {
    var position = widthOfEachSprite; //start position for the image
    const speed = 100; //in millisecond(ms)
    const diff = widthOfEachSprite; //difference between two sprites

    animationInterval = setInterval(() => {
      spriteSheet.style.backgroundPosition = `-${position}px 0px`;

      if (position < widthOfSpriteSheet) {
        position = position + diff;
      } else {
        //increment the position by the width of each sprite each time
        position = widthOfEachSprite;
      }
      //reset the position to show first sprite after the last one
    }, speed);
    console.log('running');
  } else {
    console.log('not running');
  }
}

startAnimation();

//* HITBOX



//* GRAVITY

let jump = false
let persoX = persoId.offsetLeft;
let persoY = persoId.offsetTop;

//setInterval(gravity, 10)

function gravity(){
  console.log(persoY + 'px');
  persoY = persoY + 10;
  persoId.style.top = persoY + 'px'
}

//* WASD MOVEMENT AKA LAND MOVEMENT



//Start animation



 // TODO Make spritesheets change for every states (considering finding a better method)
 // TODO Collision system 
 // TODO MUST FINISH WORKING ON HITBOX
 //* Maybe there's gonna be more later but that's it for the moment

