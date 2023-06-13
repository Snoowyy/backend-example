const db = require("../models");
const Clients = db.clients;

// Retrieve all Clients from the database.
exports.findAll = (req, res) => {
  Clients.findAll()
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving tutorials."
      });
    });
};