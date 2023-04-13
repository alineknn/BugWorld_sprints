/*
This is the finite automata, every Instruction is a state
with pointers to next state(s), when it is executed the next
state is returned.
*/
class Instruction {
    constructor() {};
    execute(bug) {}; // returns next Instruction;
}

class Sense extends Instruction {
    dir; // CellDirection
    cond; // Condition
    then; // Instruction
    else; // Instruction

    constructor(dir, cond) {
        super();
        this.dir = dir;
        this.cond = cond;
    }

    execute(bug) {
        if (bug.sense(this.dir, this.cond)) {
            return this.then;
        } else {
            return this.else;
        }
    }
}

class Mark extends Instruction {
    int; // Integer
    then; // Instruction

    constructor(int) {
        super();
        this.int = int;
    }

    execute(bug) {
        bug.mark(this.int);
        return this.then;
    }
}

class Unmark extends Instruction {
    int; // Integer
    then; // Instruction

    constructor(int) {
        super();
        this.int = int;
    }

    execute(bug) {
        bug.unmark(this.int);
        return this.then;
    }
}

class PickUp extends Instruction {
    then; // Instruction
    else; // Instruction

    constructor() {
        super();
    }

    execute(bug) {
        if (bug.pickUp()) {
            return this.then;
        } else {
            return this.else;
        }
    }
}

class Drop extends Instruction {
    then; // Instruction

    constructor() {
        super();
    }

    execute(bug) {
        bug.drop();
        return this.then;
    }
}

class Turn extends Instruction {
    dir; // Direction
    then; // Instruction

    constructor(dir) {
        super();
        this.dir = dir;
    }

    execute(bug) {
        bug.turn(this.dir);
        return this.then;
    }
}

class Move extends Instruction {
    then; // Instruction
    else; // Instruction

    constructor() {
        super();
    }

    execute(bug) {
        if (bug.move()) {
            return this.then;
        }
        else {
            return this.else;
        }
    }
}

class Flip extends Instruction {
    int; // Integer
    then; // Instruction
    else; // Instruction

    constructor(int) {
        super();
        this.int = int;
    }

    execute(bug) {
        if (Math.floor(Math.random() * this.int) == 0) {
            return this.then;
        } else {
            return this.else;
        }
    }
}