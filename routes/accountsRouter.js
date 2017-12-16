const express = require('express');
const router = express.Router();
const companyCtrl = require('./../controllers/companyController');

router.POST('/company/create', companyCtrl.create_company_acc);

module.exports = router;
