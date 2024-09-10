const ordersModel = require("./orders.model");

const orders = {
  Query: {
    orders: () => {
      return ordersModel.getAllOrders();
    },
  },
};

module.exports = orders;
