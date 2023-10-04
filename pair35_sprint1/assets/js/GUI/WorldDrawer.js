// Class for displaying the World on the canvas. Does not know how exactly to draw things, but knows about the logic
class WorldDrawer {
    /**
     * @param {World} worldObjectReference
     * @param {CanvasDrawer} drawerObjectReference
     */
    constructor(worldObjectReference, drawerObjectReference) {
        this.world = worldObjectReference;
        this.drawer = drawerObjectReference;
        this.needFullRedraw = true;
        this.gridSide = Math.min(this.drawer.width / (Math.sqrt(3) * this.world.x_size), this.drawer.height / (2 * this.world.y_size));
    }

    drawWorldGrid() {
        console.log("Starting drawing World Grid!");
        console.log(this.world.y_size, this.world.x_size);
        this.drawer.cleanCanvas();
        for (let y = 0; y < this.world.y_size; y++) {
            for (let x = 0; x < this.world.x_size; x++) {
                let lShift = this.gridSide * Math.sqrt(3) / 2;
                if (y % 2 === 1) {
                    lShift *= 2;
                }
                const hx = lShift + x * this.gridSide * Math.sqrt(3);
                const hy = (y + 1) * this.gridSide * (3 / 2);
                this.drawer.drawRightHexagon(hx, hy, this.gridSide);
                console.log(`Drawn hexagon at ${hx}, ${hy}`)
            }
        }
    }

    drawBugs() {
        // TODO: Implement me!
    }

    drawMarkers() {
        // TODO: Implement me!
    }

    drawFood() {
        // TODO: Implement me!
    }

    drawWorld() {
        if (this.needFullRedraw) {
            this.drawWorldGrid();
        }
        this.drawMarkers()
        this.drawFood()
        this.drawBugs()
    }
}