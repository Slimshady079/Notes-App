const express = require("express");
const path = require("path");
const { execArgv } = require("process");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, "public")));

app.use(require("./routes"));

app.listen(PORT, () => console.log(`Listening on http://localhost:${PORT}`));
