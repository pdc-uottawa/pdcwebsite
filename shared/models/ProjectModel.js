const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const projectSchema = new Schema({
  title: String,
  hostedBy: String,
  hostPhotoURL: String,
  date: String,
  description: String,
  user: Array,
});

const Project = mongoose.model("pdc-project", projectSchema);

module.exports = Project;
