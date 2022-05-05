document.getElementById("sign");
document.getElementById("sea");
document.getElementById("port");
document.getElementById("dock");
//* HITBOX

collisions = true;

function collisionsDetection (){
        if(land){
        hitboxTry.hitboxDetection("islandHitbox");
        hitboxTry.hitboxDetection("islandHitbox2");
        hitboxTry.hitboxDetection("islandHitbox3");
    }
    requestAnimationFrame(collisionsDetection);
}
collisionsDetection()

function collisionsDetectionWater (){
    if(land == false){
    hitboxWater.hitboxDetection("islandHitbox3");
}
requestAnimationFrame(collisionsDetectionWater);
}
collisionsDetectionWater()

function collSteep(){
    if(persoX < steep1X + steep1W &&
        persoX + persoW > steep1X &&
        persoY < steep1Y + steep1H &&
        persoY + persoH > steep1Y) {
            steep = true;
        } else if (persoX < steep2X + steep2W &&
            persoX + persoW > steep2X &&
            persoY < steep2Y + steep2H &&
            persoY + persoH > steep2Y) {
                steep = true;
        } else {
            steep = false;
        }
    requestAnimationFrame(collSteep);
}
collSteep()

function collSteepR(){
    if(persoX < steep4X + steep4W &&
        persoX + persoW > steep4X &&
        persoY < steep4Y + steep4H &&
        persoY + persoH > steep4Y) {
            steepR = true;
        } else if (persoX < steep5X + steep5W &&
            persoX + persoW > steep5X &&
            persoY < steep5Y + steep5H &&
            persoY + persoH > steep5Y) {
                steepR = true;
        } else if (persoX < steep6X + steep6W &&
            persoX + persoW > steep6X &&
            persoY < steep6Y + steep6H &&
            persoY + persoH > steep6Y) {
                steepR = true;
        } else {
            steepR = false;
        }
    requestAnimationFrame(collSteepR);
}
collSteepR()

function signcoll() {
    if (signcoll) {
        if (persoX < signX + signW &&
            persoX + persoW > signX &&
            persoY < signY + signH &&
            persoY + persoH > signY && land) {
            read.style.display = "block";
            subDlg = true;
        } else {
            read.style.display = "none";
            submarineDlg.style.display = "none";
            subDlg = false;
        }
        requestAnimationFrame(signcoll);
    }
}
signcoll();

function dockcoll() {
    if (signcoll) {
        let persoY = persoId.offsetTop,
            persoX = persoId.offsetLeft,
            persoW = persoId.offsetWidth,
            persoH = persoId.offsetHeight,
            portY = port.offsetTop,
            portX = port.offsetLeft,
            portW = port.offsetWidth,
            portH = port.offsetHeight;
        if (persoX < portX + portW &&
            persoX + persoW > portX &&
            persoY < portY + portH &&
            persoY + persoH > portY && playing) {
            dock.style.display = "block";
            leavingSub = true;
        } else {
            dock.style.display = "none";
            leavingSub = false;
        }
        requestAnimationFrame(dockcoll);
    }
}
dockcoll();

function water() {
    let persoY = persoId.offsetTop,
        persoX = persoId.offsetLeft,
        persoW = persoId.offsetWidth,
        persoH = persoId.offsetHeight,
        seaY = sea.offsetTop,
        seaX = sea.offsetLeft,
        seaW = sea.offsetWidth,
        seaH = sea.offsetHeight;
    if (persoX < seaX + seaW &&
        persoX + persoW > seaX &&
        persoY < seaY + seaH &&
        persoY + persoH > seaY) {} else {}
    requestAnimationFrame(water);
}
water();





//! MUST FINISH DROWNING, PROBLEME IS CANT SET VALUE LESS THAN 0.5

