import mongoose from 'mongoose';

const deitySchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String },
}, { timestamps: true });

export default mongoose.model('Deity', deitySchema);
