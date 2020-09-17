window.onload = function(){
    var linkig = document.getElementById("link-gg");
    linkig.onclick = function(e){
        e.preventDefault();
    }

    var img = new Image();
    img.src = "ing.jpg"

    var timer = Selection(function(){
    document.getElementById("img").src = img.src;
    },3000)

    clearTimeout(timer);
     
    var count = 0;
    setInterval
}