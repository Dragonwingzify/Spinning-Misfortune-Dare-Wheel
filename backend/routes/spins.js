const express = require("express");
const {
  createSpin,
  getSpins,
  getSpin,
  deleteSpin,
} = require("../controllers/spinController");

const router = express.Router();

//get all spins
router.get("/", getSpins);

// Get a single spin

router.get("/:id", getSpin);

//POST a new spin

router.post("/", createSpin);

// Delete a spin
router.delete("/:id", deleteSpin);

//Update a spin
// router.patch("/:id", updateSpin)

module.exports = router;
