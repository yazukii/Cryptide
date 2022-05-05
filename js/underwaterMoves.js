//* LOOK IF THE CURSOR MOVES

document.getElementById("test")

document.addEventListener('mousemove', logKey, game);

//* GET CURSOR POSITION

function logKey(e) {
  mouseX = e.pageX;
  mouseY = e.pageY;
  return mouseX;
}

function mouseP() {
  requestAnimationFrame(mouseP);
}
mouseP()

//* GAME FUNCTION CALLED EVERY 10MS

setInterval(game, 50); // Set the interval at 10ms

//* WAIT ONE SECOND BEFORE ALLOWING PLAYER TO MOVE TO PREVENT BUG WITH CAMERA

setTimeout(playing, 1000); // Set a 1second timeout before starting function playing

playing = false;

persoId.scrollIntoView({
  block: "center",
  inline: "center"
}); //Center the camera on the player

function playing() { // Set playing to true after end of timeout (1second) so now player can move
  playing = false;
}

//* FUNCTION TO MAKE PLAYER ABLE TO MOVE

function game() {
  if (playing) {
    h1 = false;
    h2 = false;
    // Get player x and y position
    let persoX = persoId.offsetLeft;
    let persoY = persoId.offsetTop;

    // Get cursor postion relative to the player position
    let dx = mouseX - persoX;
    let dy = mouseY - persoY;

    // Compute the velocity x and y of the player
    const magnitude = 30; 

    velY = dy / magnitude;

    // Apply the new position to the player
    persoId.style.left = persoX + velX + "px";
    persoId.style.top = persoY + velY + "px";
    
    // Rotate submarine to point left or right
    if(Math.sign(velX) == -1 ){
      persoId.style.transform = "scaleX(-1)";
    } else {
      persoId.style.transform = "scaleX(1)";
    }

    //! Debuging

  } else {
    h1 = true;
  }

  return running, velY;

}