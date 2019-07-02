import "reflect-metadata";
import * as dotenv                from 'dotenv';
// @ts-ignore
import express                    from 'express';
import bodyParser                 from 'body-parser';
import mongoose                   from 'mongoose';
import {ApolloServer}             from "apollo-server-express";
import {resolver}                 from './graphql/resolver';
import {schema}                   from "./graphql/schema";
import {authenticationMiddleware} from "./middleware/authenticationMiddleware";
import container                  from "./inversify.config";
import {DiscoveryService}         from "./service/DiscoveryService";

dotenv.config();

const app = express();

// Configure middleware
app.use(bodyParser.json());
app.use(authenticationMiddleware);

const server = new ApolloServer({
    typeDefs: schema,
    // @ts-ignore
    resolvers: resolver,
    context: ({req}) => ({
        // @ts-ignore
        user: req.user,
    }),
});
server.applyMiddleware({app, path: "/graphql"});

// Initialize discovery service
const discoveryService = container.get<DiscoveryService>('DiscoveryService');
discoveryService.validate().catch(() => {
    console.log("Discovery service validation failure.");
    process.exit()
});

console.log(`Initializing API gateway
   ____       _                           
  / ___| __ _| |_ _____      ____ _ _   _ 
 | |  _ / _\` | __/ _ \\ \\ /\\ / / _\` | | | |
 | |_| | (_| | ||  __/\\ V  V / (_| | |_| |
  \\____|\\__,_|\\__\\___| \\_/\\_/ \\__,_|\\__, |
                                    |___/ 
`);

mongoose.connect(process.env.MONGODB_URL, {useNewUrlParser: true})
    .then(() => console.log("MongoDB connected..."));

const PORT = process.env.PORT || 3000;

app.listen(process.env.PORT || 3000, () => {
    console.log(`App started on port ${PORT}...`);
});
