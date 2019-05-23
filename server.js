var express = require("express");
var path = require("path");

var app = express();
var PORT = process.env.PORT || 8080;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());


app.get("/", function(req, res) {
    res.sendfile(path.join(__dirname, "public/home.html"));
  });

app.listen(PORT, function() {
    // Log (server-side) when our server has started
    console.log(PORT);
  });