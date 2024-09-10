const products= [
    {
      id: "redshoe",
      description: "Red Shoe",
      price: 45.99,
    },
    {
      id: "bluejeans",
      description: "Blue Jeans",
      price: 122.58,
    },
  ]

  function getAllProducts() {
    return products;
  }
  
  module.exports = {
    getAllProducts,
  };
  