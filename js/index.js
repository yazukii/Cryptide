// TODO Make spritesheets change for every states (considering finding a better method)
// TODO Collision system 
// TODO MUST FINISH WORKING ON HITBOX

//! JUST IMPLEMENTED STEEEEEEEEEEPS YESSSSSS 


//* Maybe there's gonna be more later but that's it for the moment
document.getElementById("submarine")

function enterSub(){
        sub = true;
        land = false;
        fall = false;
        console.log("enter");
        submarine.style.display = "none" ;
        persoId.style.left = 100 + "px";
        persoId.style.top = 405 + "px";
        persoId.style.background = "url(images/submarine.gif)";
        persoId.style.backgroundSize = "cover";
        persoId.style.width = 50 + "px"; 
        persoId.style.height = 40 + "px";
}

document.addEventListener('keypress', leaveSub)

function leaveSub(e){
    if (e.key === "e" /* e */ && leavingSub){
        land = true;
        fall = true;
        sub = false;
        console.log("leaving");
        submarine.style.display = "block" ;
        persoId.style.left = 1780 + "px";
        persoId.style.top = 399 + "px";
        persoId.style.background = "url(images/mc.gif)";
        persoId.style.width = 16 + "px"; 
        persoId.style.height = 16 + "px"; 
    }
}

function leave() {  
    submarineDlg.style.display = "none";
    console.log(land);
}

function centerCam() { 
    persoId.scrollIntoView({
        block: "center",
        inline: "center"
    });
    requestAnimationFrame(centerCam);
}

centerCam() 

function debug() {
    //console.log(persoX, persoY);
    //console.log(`persoX is ${persoX} persoY is ${persoY}`);
    //console.log(`X is ${land}, Y is ${persoY}`);
    //console.log(h1, h1);
    //console.log(h1, h2)
    requestAnimationFrame(debug);
}
debug()

//* FPS COUNTER

const times = [];

function refreshLoop() {
  window.requestAnimationFrame(() => {
    const now = performance.now();
    while (times.length > 0 && times[0] <= now - 1000) {
      times.shift();
    }
    times.push(now);
    fps = times.length;
    document.getElementById("fpsCounter").innerHTML = `${fps} fps`;
    refreshLoop();
    });
}


refreshLoop();