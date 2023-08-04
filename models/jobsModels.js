const mongoose = require("mongoose");
const { v4: uuidv4 } = require("uuid");

const Schema = mongoose.Schema;

const jobSchema = mongoose.Schema(
  {
    id: {
      type: String,
      default: uuidv4,
      unique: true,
    },
    title: {
      type: String,
      required: true,
    },
    desc: {
      type: String,
      required: true,
    },
    companyName: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    typeOfEmployment: {
      type: String,
      required: true,
    },
    jobLevel: {
      type: String,
      required: true,
    },
    capacity: {
      type: Number,
      required: true,
    },
    applied: {
      type: Number,
      required: true,
    },
    isDeleted: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

jobSchema.statics.postJob = async function (title,desc,companyName,category,typeOfEmployment,jobLevel,capacity,applied) {
    const job = await this.create({title,desc,companyName,category,typeOfEmployment,jobLevel,capacity,applied:0})
    return job
};

jobSchema.statics.softDeletejob = async function (id) {
  const job = await this.findOne(id);
  if (!job) {
    throw new Error("job not found");
  }

  job.isDeleted = true;
  return job.save();
};

// Query method to retrieve non-deleted applications
jobSchema.query.nonDeleted = function () {
  return this.where({isDeleted});
};

module.exports = mongoose.model("job", jobSchema);
