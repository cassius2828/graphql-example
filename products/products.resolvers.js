const productsModel = require("./products.model");

const products = {
  Query: {
    products: () => {
      return productsModel.getAllProducts();
    },
  },
};

module.exports = products