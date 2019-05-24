import {SurveyQuestionsController} from "../../controller/SurveyQuestionsController";

export const surveyQuestion = {
    Query: {
        surveyQuestions: SurveyQuestionsController.getInstance().querySurveyQuestions
    },
    Mutation: {
        createSurveyQuestion: SurveyQuestionsController.getInstance().createSurveyQuestion,
        deleteSurveyQuestion: SurveyQuestionsController.getInstance().deleteSurveyQuestion,
        updateSurveyQuestion: SurveyQuestionsController.getInstance().updateSurveyQuestion,
    }
};
