import {World} from "./game_logic/world.js";
import {Bug} from "./game_logic/bug.js";
import {Logger} from "./logger.js";

/**
 * @class Engine
 * @classdesc TODO
 * @param {World} world
 * @param {Array<Bug>} redBugs
 * @param {Array<Bug>} blackBugs
 * @param {number} cycles
 */
export class Engine {
    #world;
    #redBugs;
    #blackBugs;
    #cycles;

    constructor(world, redBugs, blackBugs, cycles) {
        this.#world = world;
        this.#redBugs = redBugs;
        this.#blackBugs = blackBugs;
        this.#cycles = cycles;
    }

    /**
     * Runs the engine.
     * @param {File} world
     * @param {Array<Bug>} redBugs
     * @param {Array<Bug>} blackBugs
     * @param {number} cycles
     * @param {?Logger} logger
     */
    run(world, redBugs, blackBugs, cycles, logger) {
        throw new Error("Not implemented")
    }
}