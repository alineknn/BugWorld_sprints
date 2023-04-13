import {Engine} from "./engine.js";
import {Tournament} from "./tournament.js";
import {Logger} from "./logger.js";

/**
 * @class Simulator
 * @classdesc TODO
 * @param {Engine} engine
 * @param {Tournament} tournament
 * @param {Logger} logger
 */
class Simulator {
    #engine;
    #tournament;
    #logger;

    /**
     * @param {File} world
     * @param {File} redBugs
     * @param {File} blackBugs
     */
    constructor(world, redBugs, blackBugs) {
        throw new Error("Not implemented");
    }
}