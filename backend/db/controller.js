const {People, Tag, Relationship  } = require("./model");

exports.createPerson = (req, res) => {
  const newPerson = new People(req.body);
  newPerson.save((err) => {
    if (err) res.send(err);
    res.send("data inserted");
  });
};

exports.createTag = (req, res) => {
  const newTag = new Tag(req.body);
  newTag.save((err) => {
    if (err) res.send(err);
    res.send("data inserted");
  });
};

exports.getPeople = (req, res) => {
  People.find((err, people) => {
    if (err) res.send(err);
    res.json(people);
  });
};

exports.getPeopleById = (req, res) => {
  const id = req.params.id;
  People.findById(id, (err, people) => {
    if (err) res.send(err);
    res.json(people);
  });
};

exports.getTags = (req, res) => {
  Tag.find((err, tag) => {
    if (err) res.send(err);
    res.json(tag);
  });
};

exports.createRelationship = (req, res) => {
  const newRelationship = new Relationship(req.body)
  newRelationship.save((err) => {
    if (err) res.send(err);
    res.send("data inserted");
  });
};

exports.getRelationship = (req, res) => {
  
  Relationship.find((err, relationship) => {
    if (err) res.send(err);
    res.json(relationship);
  });
};
