import {gql} from 'apollo-server-express';

export const widgetRegistry = gql`
    
    type Widget {
        name: String
        author: String
        uuid: String,
        templateSource: String,
        styleSource: String,
        scriptSource: String
    }
    
    input CreateWidgetInput {
        name: String!
        author: String!
        templateSource: String!
        styleSource: String!
        scriptSource: String!
    }
    
    extend type Query {
        widgets(uuid: String): [Widget]
    }
    
    extend type Mutation {
        createWidget(
            data: CreateWidgetInput!
        ): Widget
    }
    
`;
