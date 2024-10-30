// ctx.beginPath ();
    // ctx.moveTo (0,0);
    // ctx.lineTo (100, 0);
    // ctx.stroke ();

    // ctx.fillStyle = "rgba(255, 0, 0, 0.314159265358559)";
    // ctx.fillRect (10, 10, 100, 100);

    // ctx.fillStyle = "rgb(0, 255, 0)";
    // ctx.fillRect (350, 250, 100, 100);

    // ctx.fillStyle = "rgb(0, 0, 255)";
    // ctx.fillRect (690, 480, 100, 100);

    // ctx.beginPath ();
    // ctx.arc (120, 120, 100, 0, 2 * Math.PI);
    // ctx.fillStyle = "rgb (0, 0, 0)";
    // ctx.stroke ();
    // ctx.fill ();

let x, y, dx, dy, canvas, ctx, ballRadius;

 // erase previous frame an draw new frame
 const updateCanvas = () => {
    // erase canvas
    ctx.clearRect (0, 0, canvas.width, canvas.height)

    ctx.beginPath();
    ctx.fillStyle = "rgb(0, 0, 255)";
    ctx.arc(x, y, ballRadius, 0, Math.PI * 2);
    ctx.fill ();
    ctx.closePath ();

    if (x + dx > canvas.width - ballRadius || x + dx < ballRadius) {
        dx = -dx;
    }

    if (y + dy > canvas.height - ballRadius || y + dy < ballRadius) {
        dy = -dy;
    }

    x = x + dx;
    y = y + dy;

    requestAnimationFrame(updateCanvas);
}

window.onload = () => {
    canvas = document.getElementById("canvasBoard");
    ctx = canvas.getContext('2d');

     ballRadius = 10;

    x = canvas.width/2 - ballRadius / 2;
    y = canvas.height/2 - ballRadius/2;
    dx = 2;
    dy = 2;

    updateCanvas();


}
