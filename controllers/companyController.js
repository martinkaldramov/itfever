// const Job = require('../models/job');
const Company = require('../models/companyAcc.js');


module.exports.create_company_acc = (req, res, next) => { // eslint-disable-line
  var company = new Company({
    username: req.body.username,
    password: req.body.password,
    accType: req.body.accType,
    name: req.body.name,
    address: req.body.address,
    phone: req.body.phone,
    webUrl: req.body.webUrl,
  });

  company.save().then((res) => {
    res.send(res);
  }).catch((e) => {
    console.log(e); // eslint-disable-line
  })
}
