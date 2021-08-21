const express = require("express");
const cors = require("cors");

const app = express();

//Middleware
app.use(cors());

//Route
const DisplayPage = require("./routes/getAPIs.js");
app.use("/", DisplayPage);

//Server listen
const port = 3000;
app.listen(port, () => console.log(`Server on ${port}`));
