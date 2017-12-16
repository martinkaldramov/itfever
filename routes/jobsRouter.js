const express = require('express');
const router = express.Router();

const jobCtrl = require('./../controllers/jobController');

router.POST('/jobs/post', jobCtrl.create_job);

module.exports = router;
