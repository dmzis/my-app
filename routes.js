const express = require('express');

const router = express.Router();

module.exports = router;

router.get('/', (req, res) => {
  res.send('Home');
});

router.get('/about/', (req, res) => {
  res.send('About');
});

router.get('/contact/', (req, res) => {
  res.send('Contact us');
});
