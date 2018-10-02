let express = require("express");
let path = require("path");
let app = express();

app.use("/static", express.static(__dirname + "/static"));

app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "index.html"));
});

var port = process.env.PORT || 5000;

app.listen(port);

console.log("Running on Port " + port);
