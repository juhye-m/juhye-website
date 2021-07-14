var text = ["Composer", "Singer-Songwriter", "JuHye Mun"];
var counter = 0;
var elem = $("#text");
setInterval(change, 2000);
function change() {
    elem.fadeOut(function(){
        elem.html(text[counter]);
        counter++;
        if(counter >= text.length) { counter = 0; }
        elem.fadeIn();
    });
}