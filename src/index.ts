import '@babel/polyfill';
import * as dotenv                from 'dotenv';
// @ts-ignore
import {default as express}       from 'express';
import * as bodyParser            from 'body-parser';
import mongoose                   from 'mongoose';
import {ApolloServer}             from "apollo-server-express";
import {DiscoveryServiceImpl}     from "./service/impl/DiscoveryServiceImpl";
import {resolver}                 from './graphql/resolver';
import {schema}                   from "./graphql/schema";
import {authenticationMiddleware} from "./middleware/authenticationMiddleware";

dotenv.config();

const app = express();

// Configure middleware
app.use(bodyParser.json());
app.use(authenticationMiddleware);

const server = new ApolloServer({
    typeDefs: schema,
    resolvers: resolver,
    context: ({ req }) => ({
        user: req.user,
    }),
});
server.applyMiddleware({app, path: "/graphql"});

// Initialize discovery service
const discoveryService = new DiscoveryServiceImpl(process.env.DISCOVERY_SERVICE_URL);
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
