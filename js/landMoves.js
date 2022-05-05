//* WASD MOVEMENT

document.addEventListener('keydown', press)

function press(e) {
    if (land) {
        if (e.keyCode === 39 /* right */ || e.keyCode === 68 /* d */ ) {
            right = true;
        }
        if (e.keyCode === 37 /* left */ || e.keyCode === 65 /* a */ ) {
            left = true;
        }
        if (e.keyCode === 89 /* left */ ) {
            leftSteep = true;
            persoId.style.backgroundImage = url(persoIdle);
        }
        if (e.keyCode === 88 /* left */ ) {
            rightSteep = true;
            persoId.style.backgroundImage = persoIdle
        }
    }
}

document.addEventListener('keyup', release)

function release(e) {
    if (land) {
        if (e.keyCode === 39 /* right */ || e.keyCode === 68 /* d */ ) {
            right = false
            persoId.style.backgroundImage = persoIdle;
        }
        if (e.keyCode === 37 /* left */ || e.keyCode === 65 /* a */ ) {
            left = false
            persoId.style.backgroundImage = persoIdle;
        }
        if (e.keyCode === 89 /* left */ ) {
            leftSteep = false;
            persoId.style.backgroundImage = persoIdle;
        }
        if (e.keyCode === 88 /* left */ ) {
            rightSteep = false;
            persoId.style.backgroundImage = persoIdle;
        }
    }
}

setInterval(gameLoop, 10);

function gameLoop() {
    if (land) {
        if (right && steep == false) {
            persoId.style.transform = "scaleX(1)";
            persoId.style.backgroundImage = persoWalk;
            x = persoId.offsetLeft + speed;
        }
        if (left) {
            persoId.style.transform = "scaleX(-1)";
            persoId.style.backgroundImage = persoWalk;
            x = persoId.offsetLeft - speed;
        }

        if (right && steep) {
            persoId.style.transform = "scaleX(1)";
            persoId.style.backgroundImage = persoWalk;
            y = persoId.offsetTop - speed; 
            x = persoId.offsetLeft + speed; 
            persoId.style.top = y + 'px';
            fall = false;
        }

        if (left && steepR) {
            persoId.style.transform = "scaleX(-1)";
            persoId.style.backgroundImage = persoWalk;
            y = persoId.offsetTop - speed; 
            x = persoId.offsetLeft - speed; 
            persoId.style.top = y + 'px';
            fall = false;
        }

        if (leftSteep) {
            persoId.style.transform = "scaleX(-1)";
            persoId.style.backgroundImage = persoWalk;
            y = persoId.offsetTop + speed;  
            x = persoId.offsetLeft + speed;
            persoId.style.left = y + 'px';
            fall = false;
        }
        if (left && right) {
            persoId.style.backgroundImage = persoIdle;
            x = persoId.offsetLeft;
        }

        persoId.style.left = x + 'px';
    }
}

//* JUMP FUNCTION

document.addEventListener('keydown', takeOff)

function takeOff(e) {
    if (land) {
        if (e.keyCode === 32 /* space */ && cooldown ) {
            velY = -5;
            cooldown = false;
        }
    }
}

function crpytPos() {
    dCryptX = cryptideX - persoX;
    dCryptY = cryptideY - persoY;

    requestAnimationFrame(crpytPos);
}
crpytPos()

//* CRYPTIDE WALK

document.getElementById("cryptide")

function cryptideLoop() {
        if (cryptide.offsetLeft < 2200 && walk) {
            cryptide.style.transform = "scaleX(1)";
            cryptide.style.backgroundImage = "url('images/walk_fish.gif')";
            xC = xC + cryptideSpeed;
            walkback = true;
        } else if (cryptide.offsetLeft > 1900 && walkback) {
            cryptide.style.transform = "scaleX(-1)";
            cryptide.style.backgroundImage = "url('images/walk_fish.gif')";
            xC = xC - cryptideSpeed;
            walk = false;
        } else {
            walkback = false;
            walk = true; 
        }
        cryptide.style.left = xC + 'px'
        window.requestAnimationFrame(cryptideLoop)
    }

window.requestAnimationFrame(cryptideLoop)

