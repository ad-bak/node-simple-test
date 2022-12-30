const express = require("express");

const placesControllers = require("../controllers/places-controllers");

const router = express.Router();

router.get("/:id", placesControllers.getPlaceById);

router.get("/user/:id", placesControllers.getPlacesByUserId);

router.post("/", placesControllers.createPlace);

router.patch("/:id", placesControllers.updatePlaceById);

router.delete("/:id", placesControllers.deletePlaceById);

module.exports = router;
