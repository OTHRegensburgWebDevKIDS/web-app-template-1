const logger = require("../utils/logger.js");

const about = {
  index(request, response) {
    logger.info("about rendering");
    const viewData = {
      title: "About Web app template"
    };
    response.render("about", viewData);
  }
};

module.exports = about;
