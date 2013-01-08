
var Draw = {};
function initialize() {
    Draw.canvas = document.getElementById("drawing_canvas");
    Draw.canvas.addEventListener('touchstart', function() {
        alert("touched");
    }, false);
}
window.onload = initialize;