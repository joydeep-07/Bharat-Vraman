const mongoose = require("mongoose");

const tripSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    destination: String,
    startDate: Date,
    endDate: Date,
    budget: Number,
    itinerary: [
      {
        day: Number,
        plan: String,
      },
    ],
  },
  { timestamps: true },
);

module.exports = mongoose.model("Trip", tripSchema);
