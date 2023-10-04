class Simulator {
    constructor(canvasDrawer) {
        this.worldLines = null;
        this.redBugBrain = null;
        this.blackBugBrain = null;
        this.canvasDrawer = canvasDrawer;
        this.engine = null;
        this.worldDrawer = null;
    }

    initializeWithReadFiles(worldLines, redBugLines, blackBugLines) {
        this.worldLines = worldLines;
        this.redBugBrain = redBugLines;
        this.blackBugBrain = blackBugLines;
    }

    /**
     * This function creates an engine and a worldDrawer, and then it should start the simulation. Or you can make
     * it so the simulations starts on the press of a button, then rename this function and created another one for
     * the purposes of start of the simulation
     * @param {boolean} isReversed -- Whether we should swap red and black bugs
     */
    startOneSimulation(isReversed) {
        this.engine = new Engine(new World(this.worldLines), null, null);
        this.worldDrawer = new WorldDrawer(this.engine.world, this.canvasDrawer);
    }

    drawWorld() {
        if (this.engine === null) {
            throw new Error("Nothing to draw: the engine of the simulation is not started!");
        }
        if (this.worldDrawer === null) {
            throw new Error("FATAL: Engine is created, but worldDrawer is null");
        }
        console.log("drawWorld of Simulation called!");
        this.worldDrawer.drawWorld();
    }
}