const express = require("express");
const app = express();

const { graphqlHTTP } = require("express-graphql");
const { makeExecutableSchema } = require("@graphql-tools/schema");
const { loadFilesSync } = require("@graphql-tools/load-files");


const typesArray = loadFilesSync("**/*", {
  extensions: ["graphql"],
});
const resolversArray = loadFilesSync("**/*", {
  extensions: ["resolvers.js"],
});

// all data is coming through our executable schema, no need for default root values
const schema = makeExecutableSchema({
  typeDefs: typesArray,
  resolvers: resolversArray,
});

app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    graphiql: true,
  })
);

app.listen(3000, () => {
  console.log(`Running on port 3000`);
});
