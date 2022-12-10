function changeImage() {
    console.log(document.getElementById("imgClickAndChange").src);
    if (document.getElementById("imgClickAndChange").src.includes( "ro.png")){
        document.getElementById("imgClickAndChange").src = "images/gb.png";
    } else {
        document.getElementById("imgClickAndChange").src = "images/ro.png";
    }
}