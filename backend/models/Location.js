import mongoose from 'mongoose';

const locationSchema = new mongoose.Schema({
  name: { type: String, required: true },
  state: { type: String, required: true },
  description: { type: String },
}, { timestamps: true });

export default mongoose.model('Location', locationSchema);
