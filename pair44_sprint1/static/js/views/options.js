import AbstractView from "./abstractView.js";

export default class extends AbstractView {
    constructor(params) {
        super(params);
        this.setTitle("Bug World Options");
    }

    async getHtml() {
        return $.ajax({
            type: "GET",
            url: "static/html/options.html",
            async: false
        }).responseText;
    }
}