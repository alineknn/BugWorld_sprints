import { World } from './game_logic/world.js';
import { WorldCell } from './game_logic/world_cell.js';
import { Position } from './game_logic/position.js';
import { Color } from './enums/color.js';
import { Bug } from './game_logic/bug.js';
import { Marker } from './game_logic/marker.js';


/**
 * Returns generated bug-world HTML document.
 * @param {World} world - world to be displayed
 * @return {HTMLDivElement}
 */
export function generateWorldDoc(world) { 
    
    let [height, width] = world.size


    var screenWidth = window.innerWidth 
    || document.documentElement.clientWidth
    || document.body.clientWidth;



    // size of cell, which we want, that field will be in the center of the screen
    let w = screenWidth / width;


    let scaleValue = w / 50;
    // let w = 50; // constant size of cell


    let worldDoc = document.createElement('div');
    worldDoc.className = "world"
    worldDoc.style.display = "inline-block";
    worldDoc.style.width = "min-content";
    worldDoc.style.margin = "auto";

    // worldDoc.style.transform = `scale(${scaleValue})`; // divide by 100 (size of cell) because we want to scale in percents    


    for(var i = 0; i < height; i++) {
        let rowDoc = document.createElement('div');
        rowDoc.className = "row";

        for(var j = 0; j <  width; j++) {
            let cellDoc =  document.createElement('div');
            cellDoc.className = "cell"
            cellDoc.id = "cell-" + i + "-" + j; 

            cellDoc.style.width = 100 * 0.34 + "px";
            cellDoc.style.height = 110 * 0.34 + "px";
    
            updateCell(cellDoc, world.cellAt(new Position(i, j)))
            rowDoc.appendChild(cellDoc);
        }
        worldDoc.appendChild(rowDoc);

    }


    return worldDoc;
}


/**
 * Returns generated bug HTML document.
 * @param {Color} color - color of the bug
 * @param {Number} direction - direction of the bug
 * @return {HTMLDivElement} 
 */
function generateBugDoc(color, direction) {
    let degree = 60 + 30 + 60 * direction +  "deg";

    let bugDoc = document.createElement("img");
    bugDoc.setAttribute('src', `./src/images/${color}bug.png`);   
    bugDoc.style.width = "60%";
    bugDoc.style.height = "60%";
    bugDoc.style.transform = `rotate(${degree})`;
    return bugDoc;
}



/**
 * Returns generated bug HTML document.
 * @param {Number} amount - amount of food
 * @return {HTMLDivElement} 
 */
function generateFoodDoc(amount) {    
    let textDoc = document.createElement('div');
    textDoc.innerHTML = amount + " ◉";
    textDoc.style.fontSize = "0.7em";

    textDoc.style.color = "#692c00";

    return textDoc;
}



/**
 * Returns generated bug HTML document.
 * @param {Marker} marker - marker to be displayed
 * @return {HTMLDivElement} 
 */
function generateMarkerDoc(marker) {    
    let textDoc = document.createElement('div');
    textDoc.innerHTML = "●";
    textDoc.style.fontSize = "0.7em";

    textDoc.style.color = marker.color;

    return textDoc;
}



/**
 * Returns HTML document.
 * @param {HTMLDivElement} cellDoc - cell to be displayed
 * @param {WorldCell} cell - cell to be displayed
 */
function updateCell(cellDoc, cell) { 
    let x = cell.getPosition().x
    let y = cell.getPosition().y



    if (cell.isObstructed()) {
        cellDoc.style.backgroundColor= "grey"; 
        
        let icon = document.createElement("div");
        icon.innerHTML = "#";
        icon.style.fontSize = "0.9em";

        cellDoc.appendChild(icon);
        return;
    } else {
        cellDoc.style.backgroundColor = "#E3D5C4";
    } 

    if (cell.getBase() != null) {
        let base = cell.getBase();

        if (base == Color.Red) {
            cellDoc.style.backgroundColor= "#FF8073"; 
        } else if(base == Color.Black){
            cellDoc.style.backgroundColor= "#38E05D"; 
        }
    }


    if (cell.isOccupied()) {
        let bug = cell.getBug();
        cellDoc.appendChild(generateBugDoc(bug.getColor(), bug.getDirection()));
        return;
    }

    if (cell.getFood() > 0) {
        cellDoc.appendChild(generateFoodDoc(cell.getFood()));
    }

    if (cell.getMarker() != null) {
        cellDoc.appendChild(generateMarkerDoc(cell.getMarker()));
    }
}


// let world = new World(14, 20)

// let worldDocument = generateWorldDoc(world);

// document.getElementById("simulator").appendChild(worldDocument);


// console.log("HELLO WTF?")
