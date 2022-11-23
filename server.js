const express = require("express");
const path = require("path");

const app = express();
const PORT = 3000;

app.use(express.static(path.join(__dirname, "public")));

app.use(require("./routes"));

app.listen(PORT, () => console.log(`Listening on http://localhost:${PORT}`));
