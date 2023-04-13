import AbstractView from "./abstractView.js";
import {generateWorldDoc} from "../world-util.js";
import { World } from '../game_logic/world.js';

export default class extends AbstractView {
    constructor(params) {
        super(params);
        this.setTitle("Bug World");
    }

    async getHtml() {
        return $.ajax({
            type: "GET",
            url: "static/html/game.html",
            async: false,
            success: function(response) {
                
                const parser = new DOMParser();

                // Parse the HTML string into a Document object
                const doc = parser.parseFromString(response, 'text/html');
                
                let world = new World(14, 20)

                let worldDocument = generateWorldDoc(world);

                doc.getElementById("simulator").appendChild(worldDocument);

                document.body.innerHTML = doc.documentElement.innerHTML;

              }
        }).responseText;
    }
}