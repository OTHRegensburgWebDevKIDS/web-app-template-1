const logger = require("../utils/logger.js");

const playlistCollection = [{title: "Happy mood"}, {title: "Iconic songs"}];

const dashboard = {
    index(request, response) {
        logger.info("dashboard rendering");
        const viewData = {
            title: "Dashboard",
            playlists: playlistCollection
        };
        logger.info('about to render', playlistCollection);
        response.render("dashboard", viewData);
    }
};

module.exports = dashboard;
