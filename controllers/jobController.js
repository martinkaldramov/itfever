const Job = require('../models/job'),
      Company = require('../models/companyAcc.js');

// Create a job from POST request
module.exports.create_job = (req, res, next) => { // eslint-disable-line
  var job = new Job({
    owner: Company.find({name: req.body.name})._id,
    active: req.body.active,
    title: req.body.title,
    location: req.body.location,
    categories: req.body.categories,
    jobNature: req.body.jobNature,
    jobType: req.body.jobType,
    created: req.body.created,
    keywords: (typeof req.body.keywords === 'undefined' ? [] : req.body.keywords),
    salary: (typeof req.body.salary === 'undefined' ? null : req.body.salary),
    details: req.body.details,
    reqSkills: req.body.reqSkills,
    optSkills: req.body.optSkills,
    experience: (typeof req.body.experience === 'undefined' ? null : req.body.experience)
  });

  console.log(`Job: ${job}`); // eslint-disable-line
}
