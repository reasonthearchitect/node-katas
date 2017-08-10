import 'reflect-metadata';
import * as express from 'express';
import { Schema } from './binding';
const graphqlHTTP = require('express-graphql');
const { buildSchema } = require('graphql');
import { ORMBinding } from './binding/orm';
import { iocContainer } from './binding';

const mygraphql = graphqlHTTP({
  graphiql: true,
  rootValue: Schema.root,
  schema: buildSchema(Schema.definition),
});

const app = express();
app.use('/graphql', mygraphql);
app.listen(3010);

const config = iocContainer.get<ORMBinding>(ORMBinding).getConnection();
config.sync().then(function() {
  iocContainer.get<ORMBinding>(ORMBinding).loadData();
});
/* tslint:disable-next-line */
console.log('Running a GraphQL API server at localhost:3010/graphql');
