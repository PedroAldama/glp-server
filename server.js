const express = require('express');
const express_graphql  = require('express-graphql').graphqlHTTP;
const { buildSchema } = require('graphql');

const port = 4000;
const schema = buildSchema(`
    type Query {
        message: String
    }
`);

const root = {
    message : () => 'Hello World!'
};

const app = express();

app.use('/graphql', express_graphql({
  schema: schema,
  rootValue: root,
  graphiql: true
}));

app.listen(port, ()=>{
  console.log(`Express GraphWL Server Now Running On localhost:4000/graphql`);
});