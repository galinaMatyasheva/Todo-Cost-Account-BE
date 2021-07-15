const express = require('express');
const router = express.Router();

const {
  getAllCosts,
  createCost,
  updateCost,
  deleteCost
} = require('../controllers/costs.controller');

router.get('/costs', getAllCosts);
router.post('/costs', createCost);
router.put('/costs', updateCost);
router.delete('/costs/:id', deleteCost);

module.exports = router;
