const drawHexagonBtn = document.getElementById("draw_hexagon");
const clearCanvasBtn = document.getElementById("clear_canvas");

drawHexagonBtn.addEventListener("click", () => {
    console.log("hexagon")
    canvasDrawer.drawRightHexagon(100, 100, 100);
});
clearCanvasBtn.addEventListener("click", () => {
    console.log("clear")
    canvasDrawer.cleanCanvas();
});