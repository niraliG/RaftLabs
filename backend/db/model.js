const mongoose = require("mongoose");
const peopleSchema = mongoose.Schema({
  name : String
});

const tagSchema = mongoose.Schema({
  tagName : String
});

const relationshipSchema = mongoose.Schema({
  firstPerson : String,
  secondPerson : String,
  relationshipTagId : {type : mongoose.Schema.Types.ObjectId, ref: 'Tag'}
});

exports.People = mongoose.model("People", peopleSchema, "people");
exports.Tag = mongoose.model("Tag", tagSchema, "tag");
exports.Relationship = mongoose.model(
  "Relationship",
  relationshipSchema,
  "relationship"
);

