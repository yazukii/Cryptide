function devMode(){
    if(dev == false){
        persoId.style.outline = "1px solid blueviolet";
        steep1.style.outline = "rgb(0, 204, 255)";
        steep2.style.outline = "rgb(0, 204, 255)";
        cryptide.style.outline = "1px solid blueviolet";
        signHb.style.outline = "1px solid blueviolet";
        submarine.style.outline = "1px solid blueviolet";
        islandHb.style.outline = "1px solid blueviolet";
        islandHitbox2.style.outline = "1px solid rgb(49, 226, 43)";
        islandHitbox3.style.outline = "1px solid rgb(255, 0, 0)";
        console.log("dev")
        dev = true;
    } else if (dev == true) {
        persoId.style.outline = "transparent";
        steep1.style.outline = "transparent";
        steep2.style.outline = "transparent";
        cryptide.style.outline = "transparent";
        signHb.style.outline = "transparent";
        submarine.style.outline = "transparent";
        islandHb.style.outline = "transparent";
        islandHitbox2.style.outline = "transparent";
        islandHitbox3.style.outline = "transparent";
        console.log("not dev")
        dev = false;
    }
}

document.getElementById("islandHitbox3")
document.getElementById("cryptide")
