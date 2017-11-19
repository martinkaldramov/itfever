const mongoose = require('mongoose'),
      Schema = mongoose.Schema;

var JobSchema = Schema({
  owner: {type: Schema.Types.ObjectId, ref: 'Company', required: true},
  active: {type: Boolean, required: true},
  title: {type: String, required: true},
  location: {type: String, required: true},
  categories: {type: [String], required: true},
  jobNature: {type: [String], required: true},
  jobType: {type: String, required: true},
  created: {type: Date, required: true},
  keywords: [String],
  salary: Number,
  details: {type: String, required: true},
  reqSkills: {type: [String], required: true},
  optSkills: {type: [String], required: true},
  experience: Number,
  applied: [{type: Schema.Types.ObjectId, ref: 'User', default: null}]
});

JobSchema
.virtual('url')
.get(() => {
  return `/api/job/${this._id}`;  
});

module.exports = mongoose.model('Job', JobSchema);
