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

        let cell1 = new WorldCell(new Position(1, 2), false, null, Color.Black);
        let blackbug = new Bug(1, new Position(1, 2), Color.Black, 0, 0, 3, null, null)


        cell1.setBug(blackbug)
        
        let blackCell = new WorldCell(new Position(1, 2), false, null, Color.Black);

        
        this.#map[1][2] = cell1;
        this.#map[1][3] = blackCell;
        this.#map[1][4] = blackCell;
        this.#map[1][5] = blackCell;
        this.#map[1][6] = blackCell;
        this.#map[1][7] = blackCell;



        this.#map[2][3] = blackCell;
        this.#map[2][4] = blackCell;
        this.#map[2][5] = blackCell;
        this.#map[2][6] = blackCell;
        this.#map[2][7] = blackCell;


        this.#map[3][5] = blackCell;
        this.#map[3][6] = blackCell;





        let cell2 = new WorldCell(new Position(4, 3), false);
        let redbug = new Bug(1, new Position(4, 3), Color.Red, 0, 0, 5, null, null)
        cell2.setBug(redbug)
        this.#map[4][3] = cell2;


        let cellWithFood = new WorldCell(new Position(5, 5), false, null, null, 5, null);
        this.#map[4][5] = cellWithFood;


        let cellWithFood2= new WorldCell(new Position(5, 5), false, null, null, 2, null);
        this.#map[4][6] = cellWithFood2;


        this.#map[10][3] = cellWithFood2;

        this.#map[10][4] = cellWithFood;

        this.#map[11][3] = cellWithFood;


        this.#map[2][11] = cellWithFood
        this.#map[3][11] = cellWithFood
        this.#map[4][11] = cellWithFood2


        let obstructedCell = new WorldCell(new Position(7, 7), true, null, null, 0, null);
        this.#map[7][7] = obstructedCell;
        this.#map[7][6] = obstructedCell;
        this.#map[8][7] = obstructedCell;

        
        let redCell = new WorldCell(new Position(9, 9), false, null, Color.Red, 0, null);


        let redCellWithRedMarker = new WorldCell(new Position(9, 9), false, null, Color.Red, 0, new Marker(Color.Red, 2));

        
        this.#map[8][11] = redCell;

        this.#map[9][9] = redCell;
        this.#map[9][10] = redCellWithRedMarker;
        this.#map[9][11] = redCellWithRedMarker;
        this.#map[9][12] = redCellWithRedMarker;
        this.#map[9][13] = redCellWithRedMarker;

        this.#map[10][9] = redCellWithRedMarker;
        this.#map[10][10] = redCellWithRedMarker;
        this.#map[10][11] = redCell;
        this.#map[10][8] = redCell;
        this.#map[10][7] = redCell;


        this.#map[11][9] = redCell;
        this.#map[11][10] = redCell;
        this.#map[11][11] = redCell;
        this.#map[11][12] = redCell;
        this.#map[11][8] = redCell;
        
    
        this.#map[12][9] = redCell;
        this.#map[12][10] = redCell;
        this.#map[12][8] = redCell;


        this.#map[12][3] = obstructedCell
        this.#map[12][4] = obstructedCell

        this.#map[10][2] = obstructedCell
        this.#map[11][2] = obstructedCell
        this.#map[10][2] = obstructedCell
        this.#map[9][2] = obstructedCell




        this.#map[3][10] = obstructedCell
        this.#map[4][10] = obstructedCell
        this.#map[5][10] = obstructedCell
        this.#map[1][10] = obstructedCell
        this.#map[2][10] = obstructedCell

        


        let neutralCellWithRedMarker = new WorldCell(new Position(9, 9), false, null, null, 0, new Marker(Color.Red, 2));


        this.#map[4][2] = neutralCellWithRedMarker;
        this.#map[4][1] = neutralCellWithRedMarker;
        this.#map[5][3] = neutralCellWithRedMarker;
        
        this.#map[6][3] = neutralCellWithRedMarker;
        this.#map[6][2] = neutralCellWithRedMarker;
        this.#map[6][1] = neutralCellWithRedMarker;


        let redBugLeft = new Bug(1, new Position(4, 3), Color.Red, 0, 0, 4, null, null)

        this.#map[7][8].setBug(redBugLeft)

        this.#map[3][8].setBug(redBugLeft)


        let blackbugRight = new Bug(1, new Position(4, 3), Color.Black, 0, 0, 1, null, null)


        this.#map[6][7].setBug(blackbugRight)
        this.#map[9][8].setBug(blackbugRight)
        this.#map[6][7].setBug(blackbugRight)
        this.#map[6][7].setBug(blackbugRight)
        this.#map[6][7].setBug(blackbugRight)


        let neutralCellWithBlacksMarker = new WorldCell(new Position(9, 9), false, null, null, 0, new Marker(Color.Black, 2));

        this.#map[5][5] = neutralCellWithBlacksMarker
        this.#map[5][6] = neutralCellWithBlacksMarker
        this.#map[8][6] = neutralCellWithBlacksMarker
        this.#map[9][6] = neutralCellWithBlacksMarker
        this.#map[9][7] = neutralCellWithBlacksMarker

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
}