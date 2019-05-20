import {gql} from "apollo-server-express";

export const base = gql`
    type Query {
        "This is useless, don't worry about it"
        base: Boolean
    }
    
    type Mutation {
        "This is useless, don't worry about it"
        base: Boolean
    }
`;
