var Draw = {
    isDrawing: false,
    startPosition: { x: 0, y: 0 },
    currentPosition: {x: 0, y: 0 },
    initialize: function() {
    
        // Récupération de l'element <canvas>
        this.canvas = document.getElementById("drawing_canvas");
        this.context = this.canvas.getContext("2d");
        
        // Utilisation de la lib HammerJS pour gérer le touch et la souris
        var hammer = new Hammer(this.canvas);
        hammer.ondragstart = function(ev) {
            Draw.start(ev.position);
        };
        hammer.ondrag = function(ev) {
            Draw.drag(ev.position);
        };
        hammer.ondragend = function(ev) {
            Draw.end();
        };
        
        // Resize le canvas à la taille de la fenêtre
        this.resize();
    
    },
    start: function(position) {
        // L'utilisateur est entrain de dessiner
        this.isDrawing = true;
        
        // Stockage de la position de départ
        this.startPosition = position;
        this.move(this.startPosition);
    },
    // https://developer.mozilla.org/fr/docs/Dessiner_avec_canvas
    drag: function(position) {
        
        // Si l'utilisateur n'est pas entrain de dessiner ou bloque la fonction
        if(!this.isDrawing) {
            return;
        }
        
        // Stockage de la position de fin
        this.currentPosition = position;

        // https://developer.mozilla.org/fr/docs/Dessiner_avec_canvas#Utilisation_de_chemins
		this.context.beginPath(); 
		
		// Relier la position de départ et de fin pour dessiner un trait
		this.context.moveTo(this.startPosition.x, this.startPosition.y);
		this.context.lineTo(this.currentPosition.x, this.currentPosition.y);
		
		// Dessine le trait
		this.context.stroke();
		this.context.closePath();

		// Stockage de la position
        this.startPosition = this.currentPosition;
    },
    end: function() {
        
        // L'utilisateur n'est plus entrain de dessiner
        this.isDrawing = false;
    },
    resize: function() {
        Draw.canvas.width = document.body.clientWidth;
        Draw.canvas.height = document.body.clientHeight;
    }
};