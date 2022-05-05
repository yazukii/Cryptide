document.getElementById("islandHitbox2");
document.getElementById("cryptide");
document.getElementById("steep2");
document.getElementById("steep4");
document.getElementById("steep5");
document.getElementById("steep6");
document.getElementById("persoId");

let persoY = persoId.offsetTop,
    persoX = persoId.offsetLeft,
    persoW = persoId.offsetWidth,
    persoH = persoId.offsetHeight,
    cryptideY = cryptide.offsetTop,
    cryptideX = cryptide.offsetLeft,
    cryptideW = cryptide.offsetWidth,
    cryptideH = cryptide.offsetHeight,
    islandY = islandHitbox.offsetTop,
    islandX = islandHitbox.offsetLeft,
    islandW = islandHitbox.offsetWidth,
    islandH = islandHitbox.offsetHeight,
    island2Y = islandHitbox2.offsetTop,
    island2X = islandHitbox2.offsetLeft,
    island2W = islandHitbox2.offsetWidth,
    island2H = islandHitbox2.offsetHeight,
    island3Y = islandHitbox3.offsetTop,
    island3X = islandHitbox3.offsetLeft,
    island3W = islandHitbox3.offsetWidth,
    island3H = islandHitbox3.offsetHeight,
    steep1Y = steep1.offsetTop,
    steep1X = steep1.offsetLeft,
    steep1W = steep1.offsetWidth,
    steep1H = steep1.offsetHeight,
    steep2Y = steep2.offsetTop,
    steep2X = steep2.offsetLeft,
    steep2W = steep2.offsetWidth,
    steep2H = steep2.offsetHeight,
    steep4Y = steep4.offsetTop,
    steep4X = steep4.offsetLeft,
    steep4W = steep4.offsetWidth,
    steep4H = steep4.offsetHeight,
    steep5Y = steep5.offsetTop,
    steep5X = steep5.offsetLeft,
    steep5W = steep5.offsetWidth,
    steep5H = steep5.offsetHeight,
    steep6Y = steep6.offsetTop,
    steep6X = steep6.offsetLeft,
    steep6W = steep6.offsetWidth,
    steep6H = steep6.offsetHeight,
    signY = signHb.offsetTop,
    signX = signHb.offsetLeft,
    signW = signHb.offsetWidth,
    signH = signHb.offsetHeight,
    right = false,
    up = false,
    down = false,
    sub = false,
    VelT = 8,
    drowning = false,
    velWY = 0.1,
    friction = 70,
    leftSteep = false;
    rightSteep = false;
    left = false,
    cryptideSpeed = 0.3,
    x = 1900,
    y = 350,
    spawnX = 1900,
    spawnY = 330,
    xC = 1900,
    yC = 350,
    air = false,
    land = true,
    h1 = false,
    h2 = false,
    h3 = false,
    dCryptX = 0,
    dCryptY = 0,
    hitbox = false,
    cooldown = true,
    subDlg = true,
    walkback = true,
    walk = true,
    mouseX = -1,
    mouseY = -1,
    running = false,
    persoWalk = "url('images/mcwalk.gif')",
    persoIdle = "url('images/mc.gif",
    velY = 0,
    velX = 0,
    steep = false; 
    steepR = false;  
    dev = false,
    leavingSub = false,
    Yupdate = true,
    islandHb = document.getElementById("i0000  000Hitbox"),
    map = document.getElementById("map"),
    persoVar = document.getElementById("persoId"),
    screenLog = document.querySelector('body'),
    speed = 2;
    subSpeed = 0.01;

//* HITBOX OBJECT

let hitboxTry = {
    width: ".offsetWidth",
    height: ".offsetHeight",
    x: ".offsetLeft",
    y: ".offsetTop",
    hitboxDetection: function(i) {
        if(persoX < document.getElementById(i).offsetLeft + document.getElementById(i).offsetWidth &&
            persoX + persoW > document.getElementById(i).offsetLeft &&
            persoY < document.getElementById(i).offsetTop + document.getElementById(i).offsetHeight &&
            persoY + persoH > document.getElementById(i).offsetTop){    
                velY = 0;
                cooldown = true;
                fall = false;
                playing = false;
            } else {
                playing = true;
                fall = true;
            }
    }
};

//* HITBOX OBJECT FOR UNDERWATER COLLISIONS 

let hitboxWater = {
    width: ".offsetWidth",
    height: ".offsetHeight",
    x: ".offsetLeft",
    y: ".offsetTop",
    hitboxDetection: function(i) {
        if(persoX < document.getElementById(i).offsetLeft + document.getElementById(i).offsetWidth &&
            persoX + persoW > document.getElementById(i).offsetLeft &&
            persoY < document.getElementById(i).offsetTop + document.getElementById(i).offsetHeight &&
            persoY + persoH > document.getElementById(i).offsetTop){    
                persoId.style.left = islandHitbox3.offsetLeft - persoW  + 'px';
                console.log("colliding");
            } else {
                console.log("not colliding");
            }
    }
};

function perFrameVariables() {
    persoY = persoId.offsetTop,
    persoX = persoId.offsetLeft,
    persoW = persoId.offsetWidth,
    persoH = persoId.offsetHeight;
    requestAnimationFrame(perFrameVariables);
    return persoX, persoY, persoH, persoW
}
perFrameVariables()

const acceleration = 9.81;