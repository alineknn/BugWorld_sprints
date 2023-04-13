/**
 * @class Position   - describes coordinates on axes OX and OY. Used inside other classes.
 * @param {number} y - coordinate on axis OY
 * @param {number} x - coordinate on axis OX
 */
export class Position {
    #y = 0;
    #x = 0;

    get y() {
        return this.#y;
    }

    get x() {
        return this.#x;
    }

    constructor(y, x) {
        if (x < 0 || y < 0) {
            throw new Error("position's coordinates are incorrect: x=" + x + ", y=" + y);
        }
        this.#y = y;
        this.#x = x;
    }

    /**
     * String representation of the position.
     * @return {string} coordinates x and y
     */
    toString() {
        return "{ " + this.y + ", " + this.x + " }";
    }
}