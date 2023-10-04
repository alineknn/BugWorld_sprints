// Class for drawing simple things on the canvas. Does not know anything about the logic, only draws things
class CanvasDrawer {
    constructor(canvasName) {
        this.canvas = document.getElementById(canvasName);
        this.width = this.canvas.width;
        this.height = this.canvas.height;
        this.context = this.canvas.getContext("2d");
    }

    drawRightHexagon(x, y, sideLength) {
        this.context.beginPath();
        this.context.moveTo(x, y - sideLength);
        this.context.lineTo(x + sideLength * Math.sqrt(3) / 2, y - sideLength / 2);
        this.context.lineTo(x + sideLength * Math.sqrt(3) / 2, y + sideLength / 2);
        this.context.lineTo(x, y + sideLength);
        this.context.lineTo(x - sideLength * Math.sqrt(3) / 2, y + sideLength / 2);
        this.context.lineTo(x - sideLength * Math.sqrt(3) / 2, y - sideLength / 2);
        this.context.closePath();
        this.context.stroke();
    }

    cleanCanvas() {
        this.context.clearRect(0, 0, this.width, this.height);
    }
}
