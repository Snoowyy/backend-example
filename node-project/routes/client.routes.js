module.exports = app => {
    const client_controller = require("../controllers/client.controller.js");
  
    var router = require("express").Router();
  
    // Send all Clients
    router.get("/", client_controller.findAll);
    // Set URL
    app.use('/api/clients', router);

};