const express = require("express");
const router = express.Router();

const home = require("./controllers/home.js");
const about = require("./controllers/about.js");
const dashboard = require("./controllers/dashboard.js");

router.get("/", home.index);
router.get("/dashboard", dashboard.index);

module.exports = router;
