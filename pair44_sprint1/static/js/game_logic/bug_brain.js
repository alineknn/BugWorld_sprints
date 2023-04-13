import {Instruction} from '../assembler/instruction.js'

/**
 * @class BugBrain
 * @param {Instruction} instruction     - the first instruction to execute
 */
export class BugBrain {
    #instruction;

    constructor(instruction) {
        this.#instruction = instruction;
    }

    /**
     * Returns the next instruction from `instructions` array.
     * @return {Instruction} - `Instruction` object
     */
    getNextInstruction() {
        throw new Error("not Implemented")
    }
}