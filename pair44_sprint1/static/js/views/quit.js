import AbstractView from "./abstractView.js";

export default class extends AbstractView {
    constructor(params) {
        super(params);
        this.setTitle("Quit Bug World?");
    }

    async getHtml() {
        return $.ajax({
            type: "GET",
            url: "static/html/quit.html",
            async: false
        }).responseText;
    }
}