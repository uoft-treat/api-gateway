import {gql} from "apollo-server-express";

export const base = gql`
    type Query {
        base: Boolean
    }
`;
