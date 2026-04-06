const Trip = require("../models/Trip");

// CREATE TRIP
exports.createTrip = async (req, res) => {
  const trip = await Trip.create({
    user: req.user,
    ...req.body,
  });

  res.json(trip);
};

// GET USER TRIPS
exports.getTrips = async (req, res) => {
  const trips = await Trip.find({ user: req.user });
  res.json(trips);
};
