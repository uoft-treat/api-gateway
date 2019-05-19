import {SurveyQuestionsController} from "../../controller/SurveyQuestionsController";

export const surveyQuestion = {
    Query: {
        surveyQuestions: SurveyQuestionsController.getInstance().querySurveyQuestions
    }
};
