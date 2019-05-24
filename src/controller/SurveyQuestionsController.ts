import {SurveyQuestionsService}     from "../service/SurveyQuestionsService";
import {SurveyQuestionsServiceImpl} from "../service/impl/SurveyQuestionsServiceImpl";

let instance: SurveyQuestionsController = null;

export class SurveyQuestionsController {

    surveyQuestionsService: SurveyQuestionsService;

    constructor(surveyQuestionsService: SurveyQuestionsService) {
        this.surveyQuestionsService = surveyQuestionsService;
    }

    querySurveyQuestions = async (obj, args) => {
        if(!args.id) {
            return await this.surveyQuestionsService.getAllSurveyQuestions();
        } else {
            return [await this.surveyQuestionsService.getOneSurveyQuestion(args.id)];
        }
    };

    createSurveyQuestion = async (obj, args) => {
        return await this.surveyQuestionsService.createSurveyQuestion(args.data.title, args.data.description, args.data.questionType, args.data.choices);
    };

    deleteSurveyQuestion = async (obj, args) => {
        return await this.surveyQuestionsService.deleteSurveyQuestion(args.id);
    };

    updateSurveyQuestion = async (obj, args) => {
        return await this.surveyQuestionsService.updateSurveyQuestion(args.id, args.data.title, args.data.description, args.data.questionType, args.data.choices);
    };

    static getInstance() {
        if (!instance) {
            instance = new SurveyQuestionsController(SurveyQuestionsServiceImpl.getInstance());
        }
        return instance;
    }

}
