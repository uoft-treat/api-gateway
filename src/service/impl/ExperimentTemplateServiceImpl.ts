import {ExperimentTemplate, ExperimentTemplatePatchBody, ExperimentTemplateService} from "../ExperimentTemplateService";
import {inject, injectable}                                                         from "inversify";
import axios                                                                        from "axios";
import {customErrorWrapper}                                                         from "../../configuration/customErrorWrapper";
import {DiscoveryService}                                                           from "../DiscoveryService";
import * as url                                                                     from 'url';

const EXPERIMENT_TEMPLATE_SERVICE_NAME = 'experiment-template-service';

@injectable()
export class ExperimentTemplateServiceImpl implements ExperimentTemplateService {

    private discoveryService: DiscoveryService;

    public constructor(
        @inject('DiscoveryService') discoveryService: DiscoveryService
    ) {
        this.discoveryService = discoveryService;
    }

    /**
     * Create a new template.
     * @param name
     * @param description
     * @param link
     */
    async createExperimentTemplate(name: string, description: string, link: string): Promise<string> {
        try {
            return (await axios.post(
                (await this.discoveryService.resolve(EXPERIMENT_TEMPLATE_SERVICE_NAME)) + "/experimentTemplates",
                {name, description, link}
            )).data._id;
        } catch (e) {
            return customErrorWrapper(e);
        }
    }

    deleteOneExperimentTemplateById(id: string): Promise<void> {
        return undefined;
    }

    /**
     * Fetch all templates from server.
     */
    async getAllExperimentTemplates(): Promise<ExperimentTemplate[]> {
        try {
            return (await axios.get(
                (await this.discoveryService.resolve(EXPERIMENT_TEMPLATE_SERVICE_NAME)) + "/experimentTemplates",
            )).data;
        } catch (e) {
            return customErrorWrapper(e);
        }
    }

    /**
     * Find one template by ID.
     * @param id
     */
    async getOneExperimentTemplateById(id: string): Promise<ExperimentTemplate> {
        try {
            return (await axios.get(
                (await this.discoveryService.resolve(EXPERIMENT_TEMPLATE_SERVICE_NAME)) + "/experimentTemplates/" + id,
            )).data;
        } catch (e) {
            return customErrorWrapper(e);
        }
    }

    updateOneExperimentTemplateById(id: string, body: ExperimentTemplatePatchBody): Promise<string> {
        return undefined;
    }

    async getDataSchemaForExperimentTemplate(template: ExperimentTemplate): Promise<string> {
        try {
            return JSON.stringify((await axios.get(
                url.resolve(template.link, "/treat-schema.json")
            )).data);
        } catch (e) {
            return customErrorWrapper(e);
        }
    }

}