import mongoose from 'mongoose';

const festivalSchema = new mongoose.Schema({
  name: { type: String, required: true },
  month: { type: String },
  description: { type: String },
}, { timestamps: true });

export default mongoose.model('Festival', festivalSchema);
