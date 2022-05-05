//* WASD MOVEMENT

document.addEventListener('keydown', press)

function press(e) {
    if (sub) {
        if (e.keyCode === 39 /* right */ || e.keyCode === 68 /* d */ ) {
            right = true;
        }
        if (e.keyCode === 37 /* left */ || e.keyCode === 65 /* a */ ) {
            left = true;
        }
        if (e.keyCode === 38 /* up */ || e.keyCode === 87 /* w */ ) {
            up = true;
        }
        if (e.keyCode === 40 /* down */ || e.keyCode === 83 /* s */ ) {
            down = true;
        }  
    }
}

document.addEventListener('keyup', release)

function release(e) {
    if (sub) {
        if (e.keyCode === 39 /* right */ || e.keyCode === 68 /* d */ ) {
            right = false;
        }
        if (e.keyCode === 37 /* left */ || e.keyCode === 65 /* a */ ) {
            left = false;
        }
        if (e.keyCode === 38 /* up */ || e.keyCode === 87 /* w */ ) {
            up = false;
        }
        if (e.keyCode === 40 /* down */ || e.keyCode === 83 /* s */ ) {
            down = false;
        } 
    }
}

setInterval(gameLoop, 10);

function gameLoop() {
    if (sub) {
        if (right) {
            persoId.style.transform = "scaleX(1)";
            x = persoId.offsetLeft + speed;
        }
        if (left) {
            persoId.style.transform = "scaleX(-1)";;
            x = persoId.offsetLeft - speed;
        }
        if (up) {
            y = persoId.offsetTop - speed;
        }
        if (down) {
            y = persoId.offsetTop + speed;
        }
        if (left && right) {
            x = persoId.offsetLeft;
        }
        if (up && down) {
            y = persoId.offsetTop;
        }

        persoId.style.top = y + 'px';
        persoId.style.left = x + 'px';
    }
}