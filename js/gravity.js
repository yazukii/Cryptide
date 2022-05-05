//* GRAVITY\
const charWeight = 50;
let fall = false;

function gravity() {
    if(fall){
        let Y = persoId.offsetTop;

        
        velY += acceleration / friction;
        
        persoId.style.top = +Y + velY + "px";
        persoId.style.left = persoId.offsetLeft + velX + "px";
        
        collisions = true;
        //! DEBUGGING 

    }
    requestAnimationFrame(gravity);
}
gravity()