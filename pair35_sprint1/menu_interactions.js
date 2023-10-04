//Const for Divs (sections)
const welcomeSection = document.getElementById("welcome-section");
const gameSetup = document.getElementById("game-setup");
const mainGame = document.getElementById("main-game");

//Consts for buttons
const startBtn = document.getElementById("start-btn");
const startSimBtn = document.getElementById("start-simulation-btn");

//functions to hide said Div
startBtn.addEventListener("click", () => {
    welcomeSection.classList.add("hidden");
    gameSetup.classList.remove("hidden");
});
startSimBtn.addEventListener("click", () => {
    welcomeSection.classList.add("hidden");
    gameSetup.classList.add("hidden");
    mainGame.classList.remove("hidden");

    // Here we need to read the submitted files and pass them to the simulator object
    const waitFilesLambda = async () => {
        const worldFilePromise = readFileAsLines(file1Input.files[0]);
        const bugFilePromise1 = readFileAsLines(file2Input.files[0]);
        const bugFilePromise2 = readFileAsLines(file3Input.files[0]);

        const [worldFileLines, bugFile1Lines, bugFile2Lines] = await Promise.all([
            worldFilePromise,
            bugFilePromise1,
            bugFilePromise2
        ]);

        console.log("Read files inside promise")
        simulator.initializeWithReadFiles(worldFileLines, bugFile1Lines, bugFile2Lines);
        simulator.startOneSimulation(false);
        simulator.drawWorld();
    }

    waitFilesLambda().then(() => {
        console.log('Files read, <<simulation>> started')
    }).catch((error) => {
        console.log('Error during reading files:', error);
    })


});

//Consts for file input
const file1Input = document.getElementById('world-map');
const file2Input = document.getElementById('bug-assembler-1');
const file3Input = document.getElementById('bug-assembler-2');

//Separate file extension from file name
const verifyFileExtension = (fileName, extension) => {
    const fileExtension = fileName.split('.').pop();
    return fileExtension.toLowerCase() === extension.toLowerCase();
};

//Check for all files to be .txt and alert if otherwise
const checkFileExtensions = () => {
    const file1 = file1Input.files[0];
    const file2 = file2Input.files[0];
    const file3 = file3Input.files[0];

    if (file1 && file2 && file3) {
        if (verifyFileExtension(file1.name, 'txt') &&
            verifyFileExtension(file2.name, 'txt') &&
            verifyFileExtension(file3.name, 'txt')) {
            startSimBtn.disabled = false;
        } else {
            alert('All files must be in .txt format.');
        }
    }
};
file1Input.addEventListener('change', checkFileExtensions);
file2Input.addEventListener('change', checkFileExtensions);
file3Input.addEventListener('change', checkFileExtensions);