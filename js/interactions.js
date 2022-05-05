document.getElementById("submarineDlg")
document.addEventListener('keypress', openSubDlg)

submarineDlg.style.display = "none" 

function openSubDlg(e){
    if(subDlg){
        if (e.key === "e" /* e */ && submarineDlg.style.display == "none") {
            submarineDlg.style.display = "flex";
            persoId.style.transform = "scaleX(1)";
            console.log(land);
        } else if(e.key === "e" /* e */ && submarineDlg.style.display == "flex") {
            submarineDlg.style.display = "none";
            console.log(land);
        }
    }
}