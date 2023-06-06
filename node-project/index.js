const express = require("express");
var db_connection = require("./helpers/db_connection");
const app = express();

app.get("/", function (req, res) {
  try {
    db_connection.query("SELECT * FROM wp_users ORDER BY id desc", function (err, rows) {
      if (err) {
        res.status(400).send({ status: 'Error', data: err});
      }
      res.status(200).send({ status: 'Success', data: rows});
    });
  } catch (error) {
    res.status(400).send({ status: 'Error', data: error});
  }
});

app.listen(3000);
