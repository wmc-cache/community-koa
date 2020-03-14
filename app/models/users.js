const mongoose = require("mongoose");

const { Schema, model } = mongoose;

const userSchema = new Schema({
  __v: { type: Number, select: false }, //隐藏
  name: { type: String, required: true },
  password: { type: String, required: true },
  avatar_url: { type: String },
  gender: {
    type: String,
    enum: ["male", "female"],
    default: "male",
    require: true
  },
  headline: { type: String },
  locations: { type: [{ type: String }] },
  business: { type: String },
  employments: {
    type: [
      {
        company: { type: String },
        job: { type: String }
      }
    ],
    select: false
  },
  educations: {
    type: [
      {
        school: { type: String },
        major: { type: String },
        diploma: { type: Number, enum: [1, 2, 3, 4, 5] },
        entrance_year: { type: Number },
        graduation_year: { type: Number }
      }
    ],
    select: false
  },
  following: {
    type: [{ type: Schema.Types.ObjectId, ref: "User" }],
    select: false
  }
});

module.exports = model("User", userSchema);