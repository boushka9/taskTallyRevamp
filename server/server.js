//requiring vital packages
const express = require('express');
const db = require('./config/connection');
const { ApolloServer } = require('apollo-server-express');
const {typeDefs, resolvers } = require('./schemas');
//PLACEHOLDER - DOES NOT EXIST YET
//const {authMiddleware } = require('./utils/auth');

//instance of express and port with port number 
const app = express();
const PORT = process.env.PORT || 3001;

//TODO- require routes

//init Apollo server

const server = new ApolloServer ({
    typeDefs,
    resolvers
});

//TODO - ADD APOLLO MIDDLEWARE TO EXPRESS APPLICATION WITH UTILS AND AUTHS
//server.applyMiddleWare({ app });

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//confirmation messages

db.once('open', () => {
    app.listen(PORT, () => {
      console.log(`API server running on port ${PORT}!`);
      console.log(`Use GraphQL at http://localhost:${PORT}${server.graphqlPath}`);
    })
  });

// app.listen(PORT, () => {
//     console.log(`Server is running on port ${PORT}`);
//     console.log(`GraphQL server ready at http://localhost:${PORT}${server.graphqlPath}`);
//   });
  