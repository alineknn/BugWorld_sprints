import {Color} from "../enums/color.js";

/**
 * @class Marker
 * @param {Color} color - color of swarm which owns the marker
 * @param {number} index - index of the marker (0 <= index < 6).
 */
export class Marker {
    #color;
    #index;

    constructor(color, index) {
        this.#color = color;
        this.#index = index;
    }

    get color() {
        return this.#color;
    }

    get index() {
        return this.#index;
    }
}