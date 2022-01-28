const express = require("express");
const app = express();

app.listen(process.env.PORT || 8080, () => {
  console.log("start at", process.env.PORT);
});
app.get("/", (req, res) => {
  res.send("hello world");
});
