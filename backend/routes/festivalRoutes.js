import express from 'express';
import Festival from '../models/Festival.js';
import authMiddleware from '../middleware/auth.js';

const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const festivals = await Festival.find();
    res.status(200).json(festivals);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.post('/', authMiddleware, async (req, res) => {
  try {
    const festival = new Festival(req.body);
    const saved = await festival.save();
    res.status(201).json(saved);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

export default router;
