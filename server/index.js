require("dotenv").config({ path: "../.env" });
const express = require("express");
const app = express();
const routes = require("./routes");

app.use(express.json());

app.use(routes);
console.log(process.env.FETCH_BASE_URL);
app.listen(process.env.SERVER_PORT, () => {
  console.log(
    `[server]: Server is running at http://localhost:${process.env.SERVER_PORT}`
  );
});
