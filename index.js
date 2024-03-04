const express = require("express");

const app = express();

app.get("/", async (req, res) => {
  res.send("Express + TypeScript Server agaaaa");
});

const port = 80;
app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});
