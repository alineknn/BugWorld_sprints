import {WorldCell} from './world_cell.js'
import {TurnDirection} from '../enums/turn_directions.js'
import {Position} from './position.js'
import { Bug } from './bug.js';
import {Color} from '../enums/color.js'
import {Marker} from './marker.js'



/**
 * @class World
 * @classdesc Describes the state of the world
 * @param {number} height - height of the map
 * @param {number} width - width of the map
 * @param {Array<WorldCell>} map - two-dimensional array of cells
 */
export class World {
    #height;
    #width;
    #map;

    constructor(height, width) {
        if (height <= 0 || width <= 0) {
            throw new Error("world's size is incorrect: height=" + height + ", width=" + width)
        }
        this.#height = height;
        this.#width = width;

        this.#map = []
        for(let i = 0; i < height; i+=1) {
            let row = []
            for (let j = 0; j < width; j+=1) {
                row.push(new WorldCell(new Position(i, j)))
            }
            this.#map.push(row)
        }
    }

    /**
     * Returns the world's height and width.
     * @return {Array<number>} array consisting of the map's height and width.
     */
    get size() {
        return [this.#height, this.#width];
    }

    #checkPosition(position) {
        if (position == null) {
            throw new Error("position is null")
        }
        if (position.x < 0 || position.y < 0) {
            throw new Error("position's coordinates are negative: x=" + position.x + ", y=" + position.y);
        }
    }

    /**
     * Returns a cell with the specified coordinates.
     * @param {Position} position - specified coordinates
     * @return {WorldCell}
     */
    cellAt(position) {
        this.#checkPosition(position);
        return this.#map[position.y][position.x];
    }

    /**
     * Sets base color to the cell.
     * @param {Position} position - position of cell which will become a base
     * @param {Color} color - color of the base
     */
    setBaseAt(position, color) {
        if (color == null) {
            throw new Error("try to assign base=null to the cell")
        }
        this.cellAt(position).setBase(color);
    }

    /**
     * Removes base from the cell
     * @param {Position} position - position of the cell from where the base will be removed
     */
    removeBaseAt(position) {
        this.#checkPosition(position);
        this.cellAt(position).removeBase();
    }

    /**
     * Returns the cell that is adjacent to the given position in the given direction.
     * @param {Position} position - the given position
     * @param {number} direction - the given direction
     * @return {WorldCell} the cell which is adjacent to the given cell
     */
    adjacent(position, direction) {
        this.#checkPosition(position);
        throw new Error("Not implemented")
    }

    /**
     * Turn in the given direction (left or right), then do the concrete amount of steps forward.
     * @param {TurnDirection} direction
     * @param {number} distance
     * @return {number}
     */
    turn(direction, distance) {
        throw new Error("Not implemented")
    }

    /**
     * Determines the target position from given position and given direction
     * @param {Position} position - given position
     * @param {number} direction - given direction
     * @return {WorldCell} the target position
     */
    sensedCell(position, direction) {
        this.#checkPosition(position);
        throw new Error("Not implemented")
    }

    /**
     * Shows whether the cell with specified coordinates is obstructed.
     * @param {Position} position - the specified coordinates
     * @return {boolean} `true` if the cell is obstructed, `false` otherwise.
     */
    isObstructed(position) {
        this.#checkPosition(position);
        return this.cellAt(position).isObstructed();
    }

    /**
     * Shows whether the cell with specified coordinates is occupied.
     * @param {Position} position - the specified coordinates
     * @return {boolean} `true` if the cell is occupied, `false` otherwise.
     */
    isOccupied(position) {
        this.#checkPosition(position);
        return this.cellAt(position).isOccupied();
    }

    /**
     * places a bug in the given position
     * @param {Position} position - the given position
     * @param {Bug} bug - the bug which will be placed in the given position.
     */
    setBugAt(position, bug) {
        this.#checkPosition(position);
        this.cellAt(position).setBug(bug);
    }

    /**
     * Returns the bug from an occupied position.
     * It is a checked run-time error to apply bug at to a cell an unoccupied cell.
     * @param {Position} position - the given position
     * @return {Bug}
     */
    getBugAt(position) {
        this.#checkPosition(position);
        return this.cellAt(position).getBug();
    }

    /**
     * removes a bug from a position; this does not affect the lifetime of the bug.
     * @param {Position} position - the given position
     */
    removeBugAt(position) {
        this.#checkPosition(position);
        this.cellAt(position).removeBug();
    }

    /**
     * Places food in the given position.
     * @param {Position} position - the given position
     * @param {number} amount - the amount of food that will be placed
     */
    setFoodAt(position, amount) {
        this.#checkPosition(position);
        const cell = this.cellAt(position);
        if (cell.isOccupied()) {
            throw new Error("try to assign food to the occupied cell")
        }
        cell.setFood(amount);
    }
    

    
    /**
     * Places food in the given position.
     * @param {Position} position - the given position
     * @param {number} amount - the amount of food that will be placed
     */
    setFoodAt(position, amount) {
        this.#checkPosition(position);
        const cell = this.cellAt(position);
        if (cell.isOccupied()) {
            throw new Error("try to assign food to the occupied cell")
        }
        cell.setFood(amount);
    }


    /**
     * Returns the amount of food in the concrete cell
     * @param {Position} position - position of cell from where amount of food should be got
     * @return {number} - amount of food in the cell
     */
    getFoodAt(position) {
        this.#checkPosition(position);
        return this.cellAt(position).getFood();
    }

    /**
     * Removes the concrete amount of food from the given position.
     * @param {Position} position - the given position
     * @param {number} amount - the amount of food that will be removed.
     */
    removeFoodAt(position, amount) {
        this.#checkPosition(position);
        return this.cellAt(position).removeFood(amount);
    }

    /**
     * Checks whether the given position belongs to the bug of the given color.
     * @param {Position} position - the given position
     * @param {Color} color - the given color
     * @return {Boolean} `true` if the position belongs to the bug of the given color, `false` otherwise.
     */
    isFriendlyBaseAt(position, color) {
        this.#checkPosition(position);
        return this.cellAt(position).isFriendlyBase(color);
    }

    /**
     * Checks whether the given position belongs to the enemy of the bug with the given color.
     * @param {Position} position - the given position
     * @param {Color} color - the given color
     * @return {boolean} `true` if the position belongs to the enemy of the bug with the given color, `false` otherwise.
     */
    isEnemyBaseAt(position, color) {
        this.#checkPosition(position);
        return this.cellAt(position).isEnemyBase(color);
    }

    /**
     * Set marker `index` at position `pos` for a swarm of color `color`.
     * @param {Position} pos - position where to set a marker
     * @param {Color} color - color of marker
     * @param {number} index - index of marker
     */
    setMarkerAt(pos, color, index) {
        this.#checkPosition(pos);
        throw new Error("Not implemented")
    }

    /**
     * Delete marker `index` at position `pos` for a swarm of color `color`.
     * @param {Position} pos - position where to set a marker
     * @param {Color} color - color of marker
     * @param {number} index - index of marker
     */
    clearMarkerAt(pos, color, index) {
        this.#checkPosition(pos);
        throw new Error("Not implemented")
    }

    /**
     * Check whether marker `index` is set at position `pos` for the bug of the color `color`.
     * @param {Position} pos - position where to set a marker
     * @param {Color} color - color of marker
     * @param {number} index - index of marker
     * @return {Boolean} `true` if the marker `index` is set at `pos` for color `color`, `false` otherwise
     */
    isFriendlyMarkerAt(pos, color, index) {
        this.#checkPosition(pos);
        throw new Error("Not implemented")
    }

    /**
     * Check whether marker `index` is set at position `pos` for the bug of the enemy color.
     * @param {Position} pos - position where to set a marker
     * @param {Color} color - color of marker
     * @param {number} index - index of marker
     * @return {Boolean} `true` if the marker `index` is set at `pos` for the enemy color, `false` otherwise.
     */
    isEnemyMarkerAt(pos, color, index) {
        this.#checkPosition(pos);
        throw new Error("Not implemented")
    }

    /**
     * sets the state of the given bug to dead
     * @param {Bug} bug - the given bug
     */
    dead(bug) {
        throw new Error("Not implemented")
    }

    /**
     * Returns a string representation of the world.
     * @return {string}
     */
    toString() {
        throw new Error("Not implemented")
    }
    
    /**
     *  Returns a new world from a string representation.
     * @return {World}
     */
    static parse(str) {
        let lines = str.trim().split("\n")

        if (lines.length <= 2) {
            throw new Error("Invalid world")
        }
        
        let height = Number(lines[0])
        let width = Number(lines[1])

        if (hegiht <= 2 || width <= 2) {
            throw new Error("Invalid world size")
        }   
         
        if (lines.length != height + 2) {
            throw new Error("The field does not correspond to the indicated dimensions")
        }
        

        let red = false;
        let black = false;


        let world = new World(height, width)

        for(let line_i = 2; line_i < lines.length; line_i++) {
            let i = line_i - 2;

            let rowChars = lines[line_i].split(" ")
            if (rowChars.length !== width) {
                throw new Error("Rows have different length")
            }
            
            for(let j = 0; j < rowChars.length; j++) {
                let curChar = rowChars[j];
                let position = new Position(i, j)

                if ('1' <= curChar && curChar <= '9') {
                    let cell = world.cellAt(position)
                    cell.setFood(Number(curChar))
                } else if(curChar == '#') {
                    let cell = world.cellAt(position)
                    cell.setObstructed(true)
                } else if(curChar == '.') {
                    continue;    
                } else if(curChar == '-' || curChar == '+') {
                    if (curChar == '-') {
                        black = true;
                    } else {
                        red = true;
                    }

                    let color = curChar == '-' ? Color.Black : Color.Red;

                    let bug = new Bug(i * width + j, position, color, 0, 0, 0, false, null)
                    let cell = world.cellAt(position)
                    cell.setBase(color)
                    cell.setBug(bug)
                } else {
                    throw new Error("Invalid character in map")
                }
            }
        }

        if (!red)  {
            throw new Error("No red swarm")
        }

        if (!black)  {
            throw new Error("No black swarm")
        }

        return world;
    }
}