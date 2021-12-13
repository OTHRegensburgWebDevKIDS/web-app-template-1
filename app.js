const express = require("express");
const logger = require("./utils/logger");
const handlebars = require("express-handlebars");

const dotenv = require("dotenv");
dotenv.config();

const app = express();

app.engine(
  ".hbs",
  handlebars({
    extname: ".hbs",
    defaultLayout: "main"
  })
);
app.set("view engine", ".hbs");

const routes = require("./routes");
app.use("/", routes);

app.listen(process.env.PORT, () => {
    console.log(`Web App template listening on ${process.env.PORT}`);
});

module.exports = app;
