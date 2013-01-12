var Draw = {
	
    // Initialisation des variables
    isDrawing: false, // L'utilisateur est il entrain de dessiner ?
    startPosition: { x: 0, y: 0 }, // Position précédente
    currentPosition: {x: 0, y: 0 }, // Position actuelle
    initialize: function() {
    
        // Récupération de l'element <canvas> par son id
        this.canvas = document.getElementById("drawing_canvas");
        
        // Récupération du context
        this.context = this.canvas.getContext("2d");
        
        // Gestion des touch gestures avec hammer.js
        var hammer = new Hammer(this.canvas);
        
        // Lorsque l'utilisateur commence à déssiner
        hammer.ondragstart = function(ev) {
            Draw.start(ev.position);
        };
        // Lorsque l'utilisateur dessine
        hammer.ondrag = function(ev) {
            Draw.move(ev.position);
        };
        // Lorsque l'utilisateur relache le doigt
        hammer.ondragend = function(ev) {
            Draw.end();
        };
	
	// On redimentionne le <canvas> au chargement
        this.resize();
    
    },
    start: function(position) {
    	
    	// On avertit le module que l'utilisateur est entrain de dessiner
        this.isDrawing = true;
        this.context.lineJoin = "round";
        this.startPosition = position;
        this.move(this.startPosition);
    },
    move: function(position) {
    	
    	// Si l'utilisateur n'est pas entrain de dessiner on bloque le script
        if(!this.isDrawing) {
            return;
        }
        
        // Sinon on récupère la position actuelle du doigt ou du pointer de la souris
        this.currentPosition = position;
        this.context.save();
	this.context.beginPath();
	this.context.lineCap = "round";
	this.context.moveTo(this.startPosition.x, this.startPosition.y);
	this.context.lineTo(this.currentPosition.x, this.currentPosition.y);
	this.context.stroke();
	this.context.closePath();
	this.context.restore();
        this.startPosition = this.currentPosition;
    },
    end: function() {
    	
    	// On avertit le module que l'utilisateur n'est plus entrain de dessiner
        this.isDrawing = false;
    },
    
    // Resize du canvas à la taille de la fenêtre
    resize: function() {
        Draw.canvas.width = document.body.clientWidth;
        Draw.canvas.height = document.body.clientHeight;
    }
};
