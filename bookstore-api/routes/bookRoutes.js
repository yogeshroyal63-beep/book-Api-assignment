const express = require('express');
const router = express.Router();

// Placeholder — routes will be added in Part 3
router.get('/', (req, res) => {
  res.json({ message: 'Books route is working' });
});

module.exports = router;
