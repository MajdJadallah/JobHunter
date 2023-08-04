const mongoose = require("mongoose");
const { v4: uuidv4 } = require("uuid");

const Schema = mongoose.Schema;

const applicationSchema = mongoose.Schema(
  {
    id: {
      type: String,
      default: uuidv4,
      unique: true,
    },
    companyName:{
      type: String,
      required: true,
    },
    firstname: {
      type: String,
      required: true,
    },
    lastname: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    major: {
      type: String,
      required: true,
    },
    birthday: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      required: true,
      default: "pending",
    },
    phonenumber: {
      type: Number,
      required: true,
    },
    jobRole: {
      type: String,
      required: true,
    },
    joblevel: {
      type: String,
      required: true,
    },
    experience: {
      type: String,
      required: true,
    },
    location: {
      type: String,
      required: true,
    },
    qualification: {
      type: String,
      required: true,
    },
    cv: {
      type: String,
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

// Static method to send an application
applicationSchema.statics.sendApplication = async function (
  companyName,
  firstname,
  lastname,
  email,
  major,
  birthday,
  status,
  phonenumber,
  jobRole,
  joblevel,
  experience,
  location,
  qualification,
  cv
) {
  const application = await this.create({
    companyName,
    firstname,
    lastname,
    email,
    major,
    birthday,
    status,
    phonenumber,
    jobRole,
    joblevel,
    experience,
    location,
    qualification,
    cv,
  });
  return application;
};

// Soft delete method by ID
applicationSchema.statics.softDeleteApplication = async function (id) {
  const application = await this.findOne(id);
  if (!application) {
    throw new Error("Application not found");
  }

  application.isDeleted = true;
  return application.save();
};

// Query method to retrieve non-deleted applications
applicationSchema.query.nonDeleted = function () {
  return this.where(isDeleted);
};

module.exports = mongoose.model("Application", applicationSchema);
