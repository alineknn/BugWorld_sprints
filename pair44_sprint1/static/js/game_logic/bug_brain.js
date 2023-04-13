import {Instruction} from '../assembler/instructions.js'

/**
 * @class BugBrain
 * @param {Array<Instruction>} instructions - list of instructions
 * @param {number} pos                      - current position in the `instructions` array
 */
export class BugBrain {
    #instructions;
    #index;

    constructor(instructions) {
        switch (instructions) {
            case null: {
                this.#instructions = null;
                this.#index = -1;
                break;
            }
            default: {
                this.#instructions.addAll(instructions);
                this.#index = 0;
            }
        }

    }

    /**
     * Returns the next instruction from `instructions` array.
     * @return {Instruction} - `Instruction` object
     */
    getNextInstruction() {
        throw new Error("not Implemented")
    }
}