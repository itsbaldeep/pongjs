class Paddle {
    // Set the properties of Paddle
    constructor() {
        this.w = width / 6; // Width
        this.h = height / 30; // Height
        this.x = ( width - this.w ) / 2; // X location
        this.dx = this.x / 30; // Speed        
    }

    // Show the Paddle
    show() {
        ctx.beginPath(); // Start Drawing
        ctx.rect(this.x, height - this.h, this.w, this.h); // Draw a rectangle
        ctx.fillStyle = 'teal'; // Color of rectangle
        ctx.fill(); // Fill the rectangle
        ctx.closePath(); // End Drawing
    }

    // Move the Paddle
    move() {
        // If right key is pressed and paddle is visible then move the paddle to right
        (rightKey && this.x + this.w < width ? this.x += this.dx : 0);
        // If left key is pressed and paddle is visible then move the paddle to left
        (leftKey && this.x > 0 ? this.x -= this.dx : 0);
    }
}
