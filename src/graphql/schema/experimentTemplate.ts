import {gql} from 'apollo-server-express';

export const experimentTemplate = gql`

    type ExperimentTemplate {
        _id: String,
        name: String,
        description: String,
        link: String,
        dataSchema: String,
    }
    
    input CreateExperimentTemplateInput {
        name: String!,
        description: String,
        link: String!
    }
    
    input UpdateExperimentTemplateInput {
        name: String,
        description: String,
        link: String,
    }
    
    extend type Query {
        experimentTemplates(id: String): [ExperimentTemplate]
    }
    
    extend type Mutation {
        createExperimentTemplate(data: CreateExperimentTemplateInput!): String
        updateExperimentTemplate(id: String!, data: UpdateExperimentTemplateInput!): String
        deleteExperimentTemplate(id: String!): Boolean
    }
    
`;
