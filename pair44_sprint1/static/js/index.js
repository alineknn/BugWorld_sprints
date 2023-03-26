/**
 * This tutorial helps understand what's going on: https://dev.to/dcodeyt/building-a-single-page-app-without-frameworks-hl9
 */

import Start from "./views/start.js";
import Settings from "./views/settings.js";
import Game from "./views/game.js";
import Options from "./views/options.js";
import Quit from "./views/quit.js";
import End from "./views/end.js";

const pathToRegex = path => new RegExp("^(.*\/)?" + path.replace(/\//g, "\\/").replace(/:\w+/g, "(.+)") + "$");

const getParams = match => {
    const values = match.result.slice(1);
    const keys = Array.from(match.route.path.matchAll(/:(\w+)/g)).map(result => result[1]);

    return Object.fromEntries(keys.map((key, i) => {
        return [key, values[i]];
    }));
};

const navigateTo = url => {
    history.pushState(null, null, url);
    router();
};

const router = async () => {
    const routes = [
        { path: "", view: Start },
        { path: "game", view: Game },
        { path: "settings", view: Settings },
        { path: "options", view: Options },
        { path: "quit", view: Quit },
        { path: "end", view: End }
    ];

    // Test each route for potential match
    const potentialMatches = routes.map(route => {
        return {
            route: route,
            result: location.pathname.match(pathToRegex(route.path))
        };
    });

    let match = potentialMatches.find(potentialMatch => potentialMatch.result !== null);

    if (!match) {
        match = {
            route: routes[0],
            result: [location.pathname]
        };
    }

    const view = new match.route.view(getParams(match));

    document.querySelector("#app").innerHTML = await view.getHtml();
};

window.addEventListener("popstate", router);

document.addEventListener("DOMContentLoaded", () => {
    document.body.addEventListener("click", e => {
        if (e.target.matches("[data-link]")) {
            e.preventDefault();
            navigateTo(e.target.href);
        }
    });

    router();
});