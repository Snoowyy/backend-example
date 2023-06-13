module.exports = (sequelize_connection, Sequelize) => {
    const Client = sequelize_connection.define("clients", {
      name: {
        type: Sequelize.STRING
      },
      address: {
        type: Sequelize.STRING
      },
      telephone: {
        type: Sequelize.BOOLEAN
      }
    });

    return Client;
  };