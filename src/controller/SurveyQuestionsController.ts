import {SurveyQuestionsService}     from "../service/SurveyQuestionsService";
import {SurveyQuestionsServiceImpl} from "../service/impl/SurveyQuestionsServiceImpl";

let instance: SurveyQuestionsController = null;

export class SurveyQuestionsController {

    surveyQuestionsService: SurveyQuestionsService;

    constructor(surveyQuestionsService: SurveyQuestionsService) {
        this.surveyQuestionsService = surveyQuestionsService;
    }

    querySurveyQuestions = async () => {
        return await this.surveyQuestionsService.getAllSurveyQuestions();
    };

    static getInstance() {
        if (!instance) {
            instance = new SurveyQuestionsController(SurveyQuestionsServiceImpl.getInstance());
        }
        return instance;
    }

}