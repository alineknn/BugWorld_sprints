/**
 * @class GUI
 * @classdesc
 * @param {Boolean} activatingLogOutput
 * @param {number} iterations
 */
export class GUI {
    #activatingLogOutput;
    #iterations;

    updateMap() {
        throw new Error("Not implemented")
    }

    /**
     * @param {File} file
     */
    setUseMapFile(file) {
        throw new Error("Not implemented")
    }

    /**
     *
     * @param {Array<File>} listOfFiles
     */
    setAssemblerFiles(listOfFiles) {
        throw new Error("Not implemented")
    }

    /**
     * @param {number} value
     */
    setIterationsNumber(value) {
        throw new Error("Not implemented")
    }

    /**
     * @param {Boolean} value
     */
    setOptions(value) {
        throw new Error("Not implemented")
    }

    /**
     * @return {number}
     */
    getIterationsNum() {
        throw new Error("Not implemented")
    }
}