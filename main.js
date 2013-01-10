
var Draw = {
    isDrawing: false
};

window.onload = function() {
    
    // Récupération de l'element <canvas>
    Draw.canvas = document.getElementById("drawing_canvas");
    
    // Lorsque l'utilisateur commence à dessiner
    Draw.canvas.addEventListener('touchstart', function(e) {
        Draw.isDrawing = true;
        var coords = { 
            x: e.clientX,
            y: e.clientY
        };
        coords;
    }, false);
    
    // Lorsque l'utilisateur dessine
    Draw.canvas.addEventListener('touchmove', function(e) {
        
    });
    
    // Lorsque l'utilisateur arrête de dessiner
    Draw.canvas.addEventListener('touchend', function(e) {
        
    });
    
};