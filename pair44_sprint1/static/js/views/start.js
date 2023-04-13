import AbstractView from "./abstractView.js";

export default class extends AbstractView {
    constructor(params) {
        super(params);
        this.setTitle("Bug World");
    }

    async getHtml() {
        return $.ajax({
            type: "GET",
            url: "static/html/index.html",
            async: false
        }).responseText;
    }   
}