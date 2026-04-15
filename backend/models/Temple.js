import mongoose from 'mongoose';

const templeSchema = new mongoose.Schema({
  name: { type: String, required: true },
  slug: { type: String, required: true, unique: true },
  templeType: { type: String },
  established: { type: String },
  state: { type: String },
  city: { type: String },
  description: { type: String },
  images: [{ type: String }],

  // PRD Detailed Fields
  historicalBackground: { type: String },
  deityInformation: { type: String },
  rituals: { type: String }, 
  darshanTimings: { type: String },
  festivals: [{ type: String }],
  visitorGuidelines: { type: String },
  nearbyFacilities: { type: String }
}, {
  timestamps: true
});

export default mongoose.model('Temple', templeSchema);
