import AbstractView from "./abstractView.js";

export default class extends AbstractView {
    constructor(params) {
        super(params);
        this.setTitle("Bug World Settings");
    }

    async getHtml() {
        return $.ajax({
            type: "GET",
            url: "static/html/settings.html",
            async: false
        }).responseText;
    }
}