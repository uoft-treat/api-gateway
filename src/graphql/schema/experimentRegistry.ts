import {gql} from 'apollo-server-express';

export const experimentRegistry = gql`

    type Experiment {
        name: String
        author: String
        uuid: String,
        templateSource: String,
        scriptSource: String
    }

    input CreateExperimentInput {
        name: String!
        author: String!
        templateSource: String!
        scriptSource: String!
    }

    extend type Mutation {
        createExperiment(
            data: CreateExperimentInput!
        ): Experiment
    }
    
    extend type Query {
        experiments(uuid: String): [Experiment]
    }

`;
