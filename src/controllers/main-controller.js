const db = require("../data/db.js");
const allProducts = db.getAll();

const controller = {
    index: (req, res) => {
        res.render("/", {
            allProducts: allProducts,
        });
    },
    search: (req, res) => {
        // Do the magic
    },
};

module.exports = controller;
