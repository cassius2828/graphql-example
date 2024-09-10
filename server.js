const express = require("express");
const { buildSchema } = require("graphql");
const { graphqlHTTP } = require("express-graphql");

const app = express();

const schema = buildSchema(`
    type Query {
    products: [Product]
    orders: [Order]
    }

    type Product {
    id: ID!
    description: String!
    price: Float!
    reviews: [Review]
}
    type Review {
    rating: Int!
    comment: String
    }

    type Order {
    date: String!
    subtotal: Float!
    items: [OrderItem]
    }

    type OrderItem {
    product: Product!
    quantity: Int!
    }
    `);
const root = {
  products: [
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
  ],
  orders: [
    {
      date: "2005-05-05",
      subtotal: 91.98,
      items: [
        {
          product: {
            id: "redshoe",
            description: "Old Red Shoe",
            price: 37.99,
          },
          quantity: 2,
        },
      ],
    },
  ],
};
app.use(
  graphqlHTTP({
    schema,
    rootValue: root,
    graphiql: true,
  })
);

app.listen(3000, () => {
  console.log(`Running on port 3000`);
});
