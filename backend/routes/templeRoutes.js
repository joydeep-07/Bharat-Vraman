import express from 'express';
import Temple from '../models/Temple.js';
import authMiddleware from '../middleware/auth.js';

const router = express.Router();

// GET all temples (public)
router.get('/', async (req, res) => {
  try {
    const filter = {};
    if (req.query.state) filter.state = new RegExp(req.query.state, 'i');
    if (req.query.city) filter.city = new RegExp(req.query.city, 'i');
    if (req.query.search) filter.name = new RegExp(req.query.search, 'i');
    
    // deity is a bit trickier, but let's assume it's in deityInformation or name
    if (req.query.deity) {
       filter.$or = [
         { deityInformation: new RegExp(req.query.deity, 'i') },
         { name: new RegExp(req.query.deity, 'i') }
       ];
    }
    
    const temples = await Temple.find(filter).sort({ createdAt: -1 });
    res.status(200).json(temples);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// GET temple by slug (public)
router.get('/:slug', async (req, res) => {
  try {
    const temple = await Temple.findOne({ slug: req.params.slug });
    if (!temple) return res.status(404).json({ message: 'Temple not found' });
    res.status(200).json(temple);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// POST create temple (admin)
router.post('/', authMiddleware, async (req, res) => {
  try {
    const temple = new Temple(req.body);
    const savedTemple = await temple.save();
    res.status(201).json(savedTemple);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// PUT update temple (admin)
router.put('/:id', authMiddleware, async (req, res) => {
  try {
    const updatedTemple = await Temple.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
    if (!updatedTemple) return res.status(404).json({ message: 'Temple not found' });
    res.status(200).json(updatedTemple);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// DELETE temple (admin)
router.delete('/:id', authMiddleware, async (req, res) => {
  try {
    const deletedTemple = await Temple.findByIdAndDelete(req.params.id);
    if (!deletedTemple) return res.status(404).json({ message: 'Temple not found' });
    res.status(200).json({ message: 'Temple deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

export default router;
