class World {
    constructor(worldFileLines) {
        const halfProcessedWorld = new halfProcessedFileRepresentation(worldFileLines);
        this.x_size = halfProcessedWorld.x;
        this.y_size = halfProcessedWorld.y;
        this.map = new Array(this.y_size);
        for (let i = 0; i < this.y_size; i++) {
            this.map[i] = new Array(this.x_size);
            for (let j = 0; j < this.x_size; j++) {
                this.map[i][j] = new WorldCell(halfProcessedWorld.lines[i][j])
            }
        }
    }
}

// This class is private and serves internal and testing purposes only
// Is actually just the map lines of the world file, with the x and y sizes
class halfProcessedFileRepresentation {
    constructor(worldFileLines) {
        this.x = parseInt(worldFileLines[0], 10);
        this.y = parseInt(worldFileLines[1], 10);
        this.lines = worldFileLines.slice(2).map((value) => {
            return value.trim().split(" ")
        });

        console.log(this.x, this.y);
        console.log(this.lines);
        console.assert(this.lines.length === this.y, "The field does not correspond to the indicated dimensions")
        this.lines.forEach((value) => {
            console.assert(value.length === this.x, "The field does not correspond to the indicated dimensions")
        });
    }
}