const express = require('express');
const router = express.Router();

const jobCtrl = require('./../controllers/jobController');

// POST request for posting a job
router.post('/jobs/post', jobCtrl.create_job);

module.exports = router;
