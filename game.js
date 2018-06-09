// The ball and the paddle
const ball = new Ball(width/2, height/2);
const paddle = new Paddle();

// Draw things on the canvas
function draw() {
    // Clear previous frame
    ctx.clearRect(0, 0, width, height);

    // Ball behaviour
    ball.show();
    ball.move();
    ball.constrain();

    // Paddle behaviour
    paddle.show();
    paddle.move();

    // The main game loop
    requestAnimationFrame(draw);
}

// Call the main loop
requestAnimationFrame(draw);