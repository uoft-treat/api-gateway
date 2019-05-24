import {SurveyQuestion, SurveyQuestionsService} from "../SurveyQuestionsService";
import {DiscoveryService} from "../DiscoveryService";
import {DiscoveryServiceImpl} from "./DiscoveryServiceImpl";
import axios from 'axios';
import {customErrorWrapper} from "../../configuration/customErrorWrapper";

let instance: SurveyQuestionsServiceImpl = null;

export class SurveyQuestionsServiceImpl implements SurveyQuestionsService {

    discoveryService: DiscoveryService;

    constructor(discoveryService: DiscoveryService) {
        this.discoveryService = discoveryService;
    }

    async getAllSurveyQuestions(): Promise<SurveyQuestion[]> {
        try {
            return (await axios.get(
                (await this.discoveryService.resolve('survey-questions-service')) + "/surveyQuestions"
            )).data;
        } catch (e) {
            return customErrorWrapper(e);
        }
    }

    async getOneSurveyQuestion(id: string): Promise<SurveyQuestion> {
        try {
            return (await axios.get(
                (await this.discoveryService.resolve('survey-questions-service')) + "/surveyQuestions/" + id
            )).data;
        } catch (e) {
            return customErrorWrapper(e);
        }
    }

    async createSurveyQuestion(title: string, description: string, questionType: string, choices: string[]): Promise<String> {
        try {
            return (await axios.post(
                (await this.discoveryService.resolve('survey-questions-service')) + "/surveyQuestions"
                , {title, description, questionType, choices})).data._id;
        } catch (e) {
            return customErrorWrapper(e);
        }
    }

    async deleteSurveyQuestion(id: string): Promise<String> {
        try {
            return (await axios.delete(
                (await this.discoveryService.resolve('survey-questions-service')) + "/surveyQuestions/" + id
            )).data.message;
        } catch (e) {
            return customErrorWrapper(e);
        }
    }

    async updateSurveyQuestion(id: string, title: string, description: string, questionType: string, choices: string[]): Promise<String> {
        try {
            return (await axios.patch(
                (await this.discoveryService.resolve('survey-questions-service')) + "/surveyQuestions/" + id
                , {title, description, questionType, choices})).data._id;
        } catch (e) {
            return customErrorWrapper(e);
        }
    }

    static getInstance() {
        if (!instance) {
            instance = new SurveyQuestionsServiceImpl(new DiscoveryServiceImpl());
        }
        return instance;
    }

}
