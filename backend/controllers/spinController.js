const Spin = require("../models/spinModel");
const mongoose = require("mongoose");

// get all spins
const getSpins = async (req, res) => {
  const spins = await Spin.find({}).sort({ createdAt: -1 });
  res.status(200).json(spins);
};
// get a single spin
const getSpin = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ error: "Spin doesn't exist" });
  }
  const spin = await Spin.findById(id);
  if (!spin) {
    return res.status(400).json({ error: "No such spin exist" });
  }
  res.status(200).json(spin);
};

//create new spin
const createSpin = async (req, res) => {
  const { title, totalWheelSpin } = req.body;

  // add doc to db
  try {
    const spin = await Spin.create({ title, totalWheelSpin });
    res.status(200).json(spin);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// delete new spin
const deleteSpin = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ error: "Spin doesn't exist" });
  }

  const spin = await Spin.findOneAndDelete({ _id: id });
  if (!spin) {
    return res.status(400).json({ error: "no such spin" });
  }

  res.status(200).json(spin);
};

//update spin

// const updateSpin = async (req, res) => {
//   const { id } = req.params;
//   if (!mongoose.Types.ObjectId.isValid(id)) {
//     return res.status(400).json({ error: "no such spin exist" });
//   }

//   const spin = await Spin.findOneAndUpdate({ _id: id },{
//     ...req.body
// });

//   if (!spin) {
//     return res.status(400).json({ error: "no such spin exist" });
//   }

//   return res.status(200).json(spin);
// };

module.exports = {
  getSpins,
  getSpin,
  createSpin,
  deleteSpin,
};
