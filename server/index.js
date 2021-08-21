const express = require("express");
const cors = require("cors");

const app = express();

//Middleware
app.use(cors());

//Route
const DisplayPage = require("./routes/getAPIs.js");
app.use("/", DisplayPage);

//production
if (process.env.NODE_ENV === "production") {
  app.use(express.static(__dirname + "/public"));
}

//SPA
app.get(/.*/, (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});

//Server listen
const port = 3000;
app.listen(port, () => console.log(`Server on ${port}`));
