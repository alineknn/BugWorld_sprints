class WorldCell {
    /**
     * @type {string}
     */
    mapChar;

    /**
     * @type {Map} // Not sure how to make Map<Color, Array<Int>> annotation
     */
    markers;

    /**
     * @type {boolean}
     */
    obstructed;

    /**
     * @type {Bug}
     */
    bug;

    /**
     * @type {int}
     */
    food;

    /**
     * @type {Color}
     */
    base;

    /**
     * @param {string} mapChar
     */
    constructor(mapChar) {
        if (!/^\d|#|-|\+|\.$/.test(mapChar)) {
            throw new Error("Value out of legal");
        }
        this.mapChar = mapChar;
        this.markers = new Map([
            [Color.RED, Array(6).fill(false)],
            [Color.BLACK, Array(6).fill(false)],
        ]);
        this.obstructed = (mapChar === "#");
        this.bug = null;

        if (/^\d$/.test(mapChar)) {
            this.food = parseInt(mapChar);
        } else {
            this.food = 0;
        }

        switch (mapChar) {
            case Color.RED.value:
                this.base = Color.RED;
                break;
            case Color.BLACK.value:
                this.base = Color.BLACK;
                break;
            default:
                this.base = null
                break;
        }
    }

    /**
     * @return {boolean}
     */
    isObstructed() {
        return this.obstructed;
    }

    /**
     * @return {boolean}
     */
    isOccupied() {
        return this.bug != null;
    }

    /**
     * @param {Bug} bug
     * @return {void}
     */
    setBug(bug) {
        this.bug = bug;
    }

    /**
     * @return {Bug}
     */
    getBug() {
        return this.bug;
    }

    /**
     * @return {boolean}
     */
    removeBug() {
        if (this.bug === null) {
            return false;
        } else {
            this.bug = null;
            return true;
        }
    }

    /**
     * @param {int} amount
     * @returns {void}
     */
    setFood(amount) {
        this.food = amount
    }

    /**
     * @param {Color} myColor
     * @returns {boolean}
     */
    isFriendlyBase(myColor) {
        return this.base === myColor;
    }

    /**
     * @param {Color} myColor
     * @returns {boolean}
     */
    isEnemyBase(myColor) {
        return this.base === myColor.getOpposite();
    }

    /**
     * @param {Color} color
     * @param {int} position
     * @returns {void}
     */
    setMarker(color, position) {
        this.markers[color][position] = true
    }

    /**
     * @param {Color} color
     * @param {int} position
     * @returns {void}
     */
    clearMarker(color, position) {
        this.markers[color][position] = false
    }

    /**
     * @param {Color} color
     * @param {int} position
     * @return {boolean}
     */
    isFriendlyMarker(color, position) {
        return this.markers[color][position]
    }

    /**
     * @param {Color} color
     * @return {boolean}
     */
    isEnemyMarker(color) {
        return this.markers[color].any()
    }

    /**
     * @param {int} position
     * @param {BugCondition} bugCondition
     * @param {Color} color
     * @return {boolean}
     */
    cellMatches(position, bugCondition, color) {
        throw new Error("CellMatches function is not implemented!")
    }

    /**
     * @return {string}
     */
    toString() {
        return `Cell: obstructed: ${this.isObstructed()}, with bug ${this.bug} with ${this.food} food is a base of team ${this.base?.teamName} and markers ${this.markers}`
    }
}