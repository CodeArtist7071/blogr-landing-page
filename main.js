function myfunction(){
    var background = document.getElementById("container");
    var hamburger = document.getElementById("ham");
    var toggle = document.getElementById("togg");
    if(toggle.style.display === "none"){
        toggle.style.display = "block"
        hamburger.style.display = "none"
        background.style.background = "rgba(12,13,14,.5)";
    }else{
        toggle.style.display = "none"
        hamburger.style.display = "inline-block"
        background.style.background = "none"

    };
}