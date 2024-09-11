const products = [
  {
    id: "4678213",
    description: "Red Shoe",
    price: 45.99,
    reviews: [],
  },
  {
    id: "43214",
    description: "Blue Jeans",
    price: 122.58,
    reviews: [],
  },
];

function getAllProducts() {
  return products;
}
function getProductsByPrice(min, max) {
  return products.filter(
    (product) => product.price >= min && product.price <= max
  );
}

function getProductById(id) {
  return products.find((product) => product.id === id);
}

function addNewProduct(id, description, price) {
  const newProduct = {
    id,
    price,
    description,
    reviews: [],
  };
  products.push(newProduct);
  return newProduct;
}
function addNewProductReview(id, rating, comment = "") {
  const newReview = {
    id: 43,
    rating,
    comment,
  };
  const targetedProduct = getProductById(id);
  targetedProduct?.reviews.push(newReview);
  return newReview;
}
module.exports = {
  getAllProducts,
  getProductsByPrice,
  getProductById,
  addNewProduct,
  addNewProductReview,
};
