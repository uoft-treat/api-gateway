import {inject, injectable}                            from "inversify";
import {ExperimentTemplate, ExperimentTemplateService} from "../service/ExperimentTemplateService";

@injectable()
export class ExperimentTemplateController {

    private experimentTemplateService: ExperimentTemplateService;

    constructor(
        @inject('ExperimentTemplateService') experimentTemplateService: ExperimentTemplateService
    ) {
        this.experimentTemplateService = experimentTemplateService;
    }

    getAllTemplates = async () => {
        return await this.experimentTemplateService.getAllExperimentTemplates();
    };

    createTemplate = async (_, {data: {name, description, link}}) => {
        return await this.experimentTemplateService.createExperimentTemplate(name, description, link);
    };

    getDataSchema = async (template: ExperimentTemplate) => {
        return await this.experimentTemplateService.getDataSchemaForExperimentTemplate(template);
    }

}
