const express = require("express");

const router = express.Router();

const {
    getAllDishes,
    togglePublish,
} = require("../controllers/dishController");

// GET All Dishes
router.get("/", getAllDishes);

// Toggle Publish Status
router.patch("/:id", togglePublish);

module.exports = router;