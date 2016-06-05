function game() {
    this.width = canvas.width;
    this.height = canvas.height;
    this.context = canvas.height;
    this.context.fillStyle = "white";
}

function paddle(x, y) {
    this.x = x;
    this.y = y;
    this.width = 2;
    this.height = 28;
    this.score = 0;
}