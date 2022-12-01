const router = require("express").Router();
let store = require("../public/assets/resources/db.json");
const { writeFile } = require("fs");
console.log("data: ", store);

router.get("/notes", (req, res) => res.json(store));

router.post("/notes", ({ body }, res) => {
  body.id = Math.floor((1 + Math.random()) * 0x10000).toString(16);

  store.push(body);

  writeFile(
    "./public/assets/resources/db.json",
    JSON.stringify(store),
    (err) => {
      if (err) throw err;
      res.json(store);
    }
  );
});

router.delete("/notes/:id", (req, res) => {
  console.log(req.params);
  store = store.filter((obj) => obj.id != req.params.id);
  writeFile(
    "./public/assets/resources/db.json",
    JSON.stringify(store),
    (err) => {
      if (err) throw err;
      res.json(store);
    }
  );
});

module.exports = router;
