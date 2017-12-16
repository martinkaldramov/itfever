const express = require('express');
const router = express.Router();
const companyCtrl = require('./../controllers/companyController');

// POST request for creating a company account
router.post('/accounts/company/create', companyCtrl.create_company_acc);

module.exports = router;
