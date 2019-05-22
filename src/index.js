const express = require("express");

const app = express();

const port = 3000;

app.use("/", (req, res) => {
  return res.json({
    name: "node demo app",
    cloud: "AWS"
  });
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
