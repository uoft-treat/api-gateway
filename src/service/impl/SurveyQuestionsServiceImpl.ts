import {SurveyQuestion, SurveyQuestionsService} from "../SurveyQuestionsService";
import {DiscoveryService}                       from "../DiscoveryService";
import {DiscoveryServiceImpl}                   from "./DiscoveryServiceImpl";
import axios                                    from 'axios';

let instance: SurveyQuestionsServiceImpl = null;

export class SurveyQuestionsServiceImpl implements SurveyQuestionsService {

    discoveryService: DiscoveryService;

    constructor(discoveryService: DiscoveryService) {
        this.discoveryService = discoveryService;
    }

    async getAllSurveyQuestions(): Promise<SurveyQuestion[]> {
        return (await axios.get(
            (await this.discoveryService.resolve('survey-questions-service')) + "/surveyQuestions"
        )).data;
    }

    static getInstance() {
        if (!instance) {
            instance = new SurveyQuestionsServiceImpl(new DiscoveryServiceImpl());
        }
        return instance;
    }

}