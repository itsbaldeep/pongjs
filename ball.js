class Ball {
    // Set the properties of Ball
    constructor(x, y) {
        this.x = x; // X coordinate
        this.y = y; // Y coordinate
        this.r = width / 50; // Radius
        this.dx = this.x / 90; // X speed
        this.dy = -this.y / 90; // Y speed
    }

    // Show the Ball
    show() {
        ctx.beginPath(); // Start Drawing
        ctx.arc(this.x, this.y, this.r, 0, Math.PI*2); // Draw a circle
        ctx.fillStyle = 'coral'; // Color of circle
        ctx.fill(); // Fill the circle
        ctx.closePath(); // End Drawing
    }

    // Move the Ball
    move() {
        // Change the coordinates with respect to speed
        this.x += this.dx;
        this.y += this.dy;
    }

    // Constrain the Ball
    constrain() {
        // Booleans for hitting edges
        let rightEdge = this.x + this.dx > width - this.r;
        let leftEdge = this.x + this.dx < this.r;
        let topEdge = this.y + this.dy < this.r;
        let paddleEdge = 
            this.y + this.dy > height - paddle.h - this.r &&
            this.x + this.dx > paddle.x &&
            this.x + this.dx < paddle.x + paddle.w;
        let bottomEdge = this.y + this.dy > height;

        // If it hits left or right edge then reverse the X speed
        (rightEdge || leftEdge ? this.dx *= -1 : 0);

        // If it hits top edge or paddle then reverse the Y speed
        (topEdge || paddleEdge ? this.dy *= -1 : 0);

        // If it goes beyond canvas then reload game
        (bottomEdge ? location.reload() : 0);
    }
}
