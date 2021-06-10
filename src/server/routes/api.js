const express = require('express');

const applicationController = require('../controllers/applicationController');

const router = express.Router();

router.get('/', applicationController.getApplication, (req, res) => {
  res.status(200).json(res.locals.applications);
});

router.post('/createApp', (req, res) => res.status(200).json({}));

module.exports = router;
