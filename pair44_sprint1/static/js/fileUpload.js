import {World} from '../game_logic/world.js';
import {Assembler} from '../game_logic/assembler.js';


export const openBugFile = async function(event) {
    let input = event.target;
    console.log("openfile called");
    let file = input.files[0];
    let text = file.text();
    text.then((value) => {
        try {
            let instruction = new Assembler().assemble(value); // change the variable later

            console.log(instruction);
        }
        catch(err) {
            console.log(err,);
        }
    })
    .catch((err) => {
        console.error(err);
        alert("file upload failed");
    })
};

export const openWorldMap = async function(event) {
    let input = event.target;

    let file = input.files[0];
    let text = file.text();


    text.then((value) => {
        try {
            let map = new World.parse(value); 
            console.log(map);
        }
        catch(err) {
            console.log(err);
        }
    })
    .catch((err) => {
        console.error(err);
        alert("map upload failed");
    })

};