import {gql} from 'apollo-server-express';

export const surveyQuestion = gql`
    
    extend type Query {
        "Get a list of survey questions"
        surveyQuestions(
            id: String
        ): [SurveyQuestion]
    }
    
    extend type Mutation {
        "Create a new survey question"
        createSurveyQuestion(
            data: CreateSurveyQuestionInput!
        ): String
    }
    
    type SurveyQuestion {
        "Survey question ID"
        _id: String
        "Title of the question"
        title: String
        "Question description"
        description: String
        "Type of the question"
        questionType: SurveyQuestionType
        "If single choice, this is a list of choices available"
        choices: [String]
        "Creation time"
        createdAt: String
        "Update time"
        updatedAt: String
    }
    
    enum SurveyQuestionType {
        SHORT_ANSWER
        SINGLE_CHOICE
    }
    
    input CreateSurveyQuestionInput {
        title: String!
        description: String
        questionType: SurveyQuestionType!
        choices: [String]
    }
`;
