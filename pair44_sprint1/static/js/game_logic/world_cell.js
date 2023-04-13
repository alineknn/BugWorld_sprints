import {Bug} from './bug.js'
import {Marker} from './marker.js'
import {Condition } from "../enums/conditions.js";
import { Position } from './position.js';

/**
 * @class Cell
 * @classdesc Stores data about one cell.
 * @param {Position} pos - immutable coordinates of the cell.
 * @param {boolean} obstructed - shows whether the cell is obstructed
 * @param {?Bug} bug - a `Bug` object, if the cell is occupied
 * @param {?Color} base - the color of the base, if the cell is the base.
 * @param {number} food - the amount of food in the cell
 * @param {?Marker} marker - //TODO
 */

export class WorldCell {
    #position;
    #obstructed;
    #bug;
    #base;
    #food;
    #marker;

    constructor(pos, obstructed = false, bug = null,
                base = null, food = 0, marker = null) {
        if (pos == null) {
            throw new Error("pos=null in WorldCell.constructor");
        }
        this.#position = pos;
        this.#obstructed = obstructed;
        this.#bug = bug;
        this.#base = base;
        this.#food = food;
        this.#marker = marker;
    }

    /**
     * Sets base in the cell
     * @param color
     */
    setBase(color) {
        if (color == null) {
            throw new Error("try to assign base=null to the cell")
        }
        if (this.#base != null) {
            throw new Error("try to assign color to the cell which is already a base");
        }
        this.#base = color;
    }

    /**
     * Removes base from the cell
     */
    removeBase() {
        this.#base = null;
    }

    /**
     * Shows whether the cell is obstructed.
     * @return {boolean}
     */
    isObstructed() {
        return this.#obstructed;
    }

    /**
     * Shows whether the cell is occupied by the bug.
     * @return {boolean}
     */
    isOccupied() {
        return this.#bug != null;
    }

    /**
     * Sets a bug which now occupies the cell.
     * @param {Bug} bug - a new bug which now occupies the cell
     * @return {boolean} `true` if the bug was successfully set, `false` otherwise.
     */
    setBug(bug) {
        if (bug == null) {
            return false;
        }
        this.#bug = bug;
        this.#bug.updatePosition(this.#position);
        this.#bug.updateHasFood(true);
        this.#food = 0;
        // TODO take food from cell
        return true;
    }

    /**
     * Returns the bug if it is in the cell, null otherwise.
     * @return {?Bug}
     */
    getBug() {
        return this.#bug;
    }


    /**
     * Returns the marker if it is in the cell, null otherwise.
     * @return {?Marker}
     */
    getMarker() {
        return this.#marker;
    }
    

    /**
     * Returns the bug if it is in the cell, null otherwise.
     * @return {?Position}
     */
    getPosition() {
        return this.#position;
    }

    /**
     * Returns .
     * @return {?Color} the color of the base, if the cell is the base otherwise null
     */
    getBase() {
        return this.#base;
    }


    /**
     * Removes the bug in the cell.
     * @return {boolean} `true` if the bug was successfully set, `false` otherwise.
     */
    removeBug() {
        // change bug's position, too
        if (!this.#bug.updatePosition(null)) {
            return false;
        }
        this.#bug = null;
        return true;
    }

    /**
     * Updates the amount of food in the cell.
     * @param {number} amount - amount of food that should be stored in the cell
     */
    setFood(amount) {
        if (this.isObstructed() || this.isOccupied()) {
            throw new Error("try to assign food to an obstructed cell");
        }
        this.#food = amount;
    }

    /**

   * Returns the amount of food in the cell
   * @return {number}
   */
    getFood() {
        return this.#food;
    }

    /**
     * Removes the amount of food.
     * @param {number} amount - amount of food to be removed
     */
    removeFood(amount) {
        this.#food = Math.max(0, this.#food - amount);

    }
    
    /**
     * Shows whether the cell is a friendly base for the given color
     * @param {Color} color - the given color
     * @return {boolean} `true` if the cell is a friendly base for the bug of the given color, `false` otherwise
     */
    isFriendlyBase(color) {
        return color === this.#base;
    }

    /**
     * Shows whether the cell is an enemy base for the given color
     * @param {Color} color - the given color
     * @return {boolean} `true` if the cell is an enemy base for the bug of the given color, `false` otherwise
     */
    isEnemyBase(color) {
        return this.#base != null && this.#base !== color;
    }

    /**
     * Sets a marker with index `index` for a swarm of color `color`.
     * @param {Color} color - color of the marker
     * @param {number} index - index of the marker
     */
    setMarker(color, index) {
        throw new Error("Not implemented")
    }

    /**
     * Deletes a marker with index `index` for a swarm of color `color`.
     * @param {Color} color - color of the marker
     * @param {number} index - index of the marker
     */
    clearMarker(color, index) {
        throw new Error("Not implemented")
    }

    /**
     * Checks whether the cell contains the marker of index `index` and color `color`
     * @param {Color} color
     * @param {number} index
     * @return {Boolean} `true` if the cell contains the marker of index `index` and color `color`, `false` otherwise.
     */
    isFriendlyMarker(color, index) {
        throw new Error("Not implemented")
    }

    /**
     * Checks whether the cell contains the marker of index `index` and color opposite to the given one.
     * @param {Color} color
     * @param {number} index
     * @return {Boolean} `true` if the cell contains the marker of index `index` and color opposite to `color`, `false` otherwise.
     */
    isEnemyMarker(color, index) {
        throw new Error("Not implemented")
    }

    /**
     * Checks whether the cell satisfies the given condition.
     * @param {Position} position
     * @param {Condition} condition
     * @param {Color} color
     * @return {Boolean} `true` if the cell matches, `false` otherwise.
     */
    cellMatches(position, condition, color) {
        throw new Error("Not implemented")
    }

    /**
     * Returns a string representation of the cell
     * @return {string}
     */
    toString() {
        const bugToStringArray = this.#bug == null ? ["null"] : ("\n" + this.#bug.toString()).split('\n');
        return "{\n" +
            "    pos: " + this.#position.toString() + "\n" +
            "    obstructed: " + this.#obstructed + "\n" +
            "    bug: " + bugToStringArray.join("\n    ") + "\n" +
            "    base: " + this.#base + "\n" +
            "    food: " + this.#food + "\n" +
            "}"
    }
}