import {World} from "./game_logic/world.js";
import {Bug} from "./game_logic/bug.js";

/**
 * @class Tournament
 * @classdesc TODO
 * @param {World} world
 * @param {Array<Bug>} redBugs
 * @param {Array<Bug>} blackBugs
 */
export class Tournament {
    #world;
    #redBugs;
    #blackBugs;

    /**
     * @param {File} world
     * @param {File} redBugs
     * @param {File} blackBugs
     * @return [number, number]
     */
    run(world, redBugs, blackBugs) {
        throw new Error("Not implemented")
    }

    /**
     * @return {string}
     */
    getCurrentTournamentStatus() {
        throw new Error("Not implemented")
    }
}