// Calcule velocite

/*let tot = Math.sqrt(dx * dx) + Math.sqrt(dy * dy);

let pourcentX = dx / tot;
pourcentX = pourcentX * (Math.sqrt(dx * dx) / dx)

let pourcentY = 1 - pourcentX;
pourcentY = pourcentY * (Math.sqrt(dy * dy) / dy)




/*
let angle = Math.atan(dy, dx);

let magnitude = 1.0;
let velX = Math.cos(angle) * magnitude;
let velY = Math.sin(angle) * magnitude;

Slendyman.x += x_motion;
Slendyman.y += y_motion;
*/



//WORKING PIECE OF CODE

/* setInterval(game, 10);

function game(){

  let persoX = persoId.offsetLeft;
  let persoY = persoId.offsetTop;  

  let dx = mouseX - persoX;
  let dy = mouseY - persoY;

  let velX = dx / 50; 
  let velY = dy / 50;

  console.log(`deltaX: ${velX} deltaY: ${velY}`);

  persoId.style.left = persoX + velX + "px";
  persoId.style.top = persoY + velY + "px";
} */


let right = false,
  left = false,
  x = 9950,
  y = 4950
document.addEventListener('keydown', press)

function press(e) {
  if (e.keyCode === 39 /* right */ || e.keyCode === 68 /* d */ ) {
    right = true
  }
  if (e.keyCode === 37 /* left */ || e.keyCode === 65 /* a */ || e.keyCode === 81 /* q */ ) {
    left = true
  }
}
document.addEventListener('keyup', release)

function release(e) {
  if (e.keyCode === 39 /* right */ || e.keyCode === 68 /* d */ ) {
    right = false
  }
  if (e.keyCode === 37 /* left */ || e.keyCode === 65 /* a */ || e.keyCode === 81 /* q */ ) {
    left = false
  }
}

function gameLoop() {
  if (right) {
    x = x + 10
  }
  if (left) {
    x = x - 10
  }
  persoId.style.left = x + 'px'
  window.requestAnimationFrame(gameLoop)
  persoId.scrollIntoView({
    block: "center",
    inline: "center"
  });
}
window.requestAnimationFrame(gameLoop)

document.addEventListener('keyup', fallBack)

function fallBack(e) {
  if (land) {
    if (e.keyCode === 32 /* space */ ) {
      air = false;
      console.log('air');
    }
  }
}

function jump() {
  if (air) {
    console.log('air')
    velocity = -10;
  }
}

//* GRAVITY

let jump = false
let persoX = persoId.offsetLeft;
let persoY = persoId.offsetTop;

//setInterval(gravity, 10)

function gravity() {
  console.log(persoY + 'px');
  persoY = persoY + 10;
  persoId.style.top = persoY + 'px'
}

//* SPRIIIIIIIIIITE SHEEEEEEEEEEEEEEETS

var animationInterval;
var spriteSheet = document.getElementById("persoId");
var widthOfSpriteSheet = 600;
var widthOfEachSprite = 100;

function stopAnimation() {
  clearInterval(animationInterval);
}

function startAnimation() {
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
}

startAnimation()