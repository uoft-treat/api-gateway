import {gql} from 'apollo-server-express';

export const surveyQuestion = gql`
    
    extend type Query {
        surveyQuestions: [SurveyQuestion]
    }
    
    type SurveyQuestion {
        _id: String
        title: String
        description: String
        questionType: SurveyQuestionType
        choices: [String]
        createdAt: String
        updatedAt: String
    }
    
    enum SurveyQuestionType {
        SHORT_ANSWER
        SINGLE_CHOICE
    }
`;
