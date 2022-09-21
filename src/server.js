import express from 'express';
import {graphqlHTTP} from 'express-graphql';
import {makeExecutableSchema} from '@graphql-tools/schema';
import {typeDefs} from './graphql/schema.js';
import {resolvers} from './graphql/resolvers.js';
import { connectDb } from './persistencia/db/index.js';

const app = express();

connectDb();

const schema = makeExecutableSchema({
    typeDefs: typeDefs,
    resolvers: resolvers 
});

app.use('/graphql', graphqlHTTP({
    schema: schema,
    graphiql: true
}))

const PORT = 8081;
app.listen(PORT, ()=>{
    console.log('Escuchando al puerto ', PORT);
})