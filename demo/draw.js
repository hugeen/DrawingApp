var Draw = {
    isDrawing: false,
    startPosition: { x: 0, y: 0 },
    currentPosition: {x: 0, y: 0 },
    initialize: function() {
    	alert("OK");
        // Récupération de l'element <canvas>
        this.canvas = document.getElementById("drawing_canvas");
        this.context = this.canvas.getContext("2d");
        
        // Lorsque l'utilisateur commence à dessiner
        this.canvas.addEventListener('touchstart', function(e) {
            Draw.start({ x: e.clientX, y: e.clientY });
        }, false);
    
        // Lorsque l'utilisateur dessine
        this.canvas.addEventListener('touchmove', function(e) {
            Draw.move({ x: e.clientX, y: e.clientY });
        });
    
        // Lorsque l'utilisateur arrête de dessiner
        this.canvas.addEventListener('touchend', function(e) {
            Draw.end();
        });
        
        this.resize();
    
    },
    start: function(position) {
        this.isDrawing = true;
        this.context.lineJoin = "round";
        this.startPosition = position;
        this.move(this.startPosition);
    },
    move: function(position) {
        if(!this.isDrawing) {
            return;
        }
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
        this.isDrawing = false;
    },
    resize: function() {
        Draw.canvas.width = document.body.clientWidth;
        Draw.canvas.height = document.body.clientHeight;
    }
};
