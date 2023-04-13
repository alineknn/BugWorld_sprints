import {BugBrain} from './bug_brain.js'
import {Color} from '../enums/color.js'

/**
 * @class Bug
 * @classdesc stores data about one bug.
 * A cell with coordinates (0, 0) is in the upper left corner.
 * Coordinates of the bug are positive float numbers.
 *
 * @param {number} id    - unique identifier of the bug
 * @param {Position} position - current position of the bug
 * @param {Color} color - color of the bug
 * @param {number} state - current state of the bug
 * @param {number} resting - time to rest
 * @param {number} direction   - current direction (0 <= dir < 6)
 * @param {boolean} hasFood - whether the bug has food
 * @param {BugBrain} brain - the bug's brain
 */
export class Bug {
    #id;
    #position;
    #color;
    #state;
    #resting;
    #direction;
    #hasFood;
    #brain;


    constructor(id, position, color, state, resting, direction, hasFood, brain) {
        this.#id = id;
        this.#position = position;
        this.#color = color;
        this.#state = state;
        this.#resting = resting;
        this.#direction = direction;
        this.#hasFood = hasFood;
        this.#brain = brain;
    }

     /**
     * Shows the color of the bug.
     * @return {Color}
     */
    getColor() { 
        return this.#color;
    }

    /**
     * Shows the color of the bug.
     * @return {Color}
     */
    getDirection() { 
        return this.#direction;
    }

    /**
     * Kills the current bug
     */
    kill() {
        throw new Error("not Implemented")
    }

    /**
     * Shows the current position of the bug.
     * @return {Position}
     */
    getPosition() {
        return this.#position;
    }

    /**
     * Returns the bug's color
     * @return {Color}
     */
    getColor() {
        return this.#color;
    }

    /**
     * Updates the bug's position.
     * @param {?Position} position - new position that should be stored.
     * @return `true` if updating position was sucessful, `false` otherwise.
     */
    updatePosition(position) {
        this.#position = position;
        return true;
    }

    /**
     * update value in `hasFood` field
     * @param {boolean} value - new value that should be assigned
     */
    updateHasFood(value) {
        this.#hasFood = value;
    }

    /**
     * Shows whether the bug has food
     * @return {boolean} `true` if the bug has food, `false` otherwise.
     */
    hasFood() {
        return this.#hasFood;
    }

    /**
     * Shows the string representation of the bug.
     * @return {string}
     */
    toString() {
        return "{\n" +
            "    id: " + this.#id + "\n" +
            "    pos: " + this.#position.toString() + "\n" +
            "    color: " + this.#color.toString() + "\n" +
            "    state: " + this.#state + "\n" +
            "    dir: " + this.#direction + "\n" +
            "    hasFood: " + this.#hasFood + "\n" +
            "}"
    }
}