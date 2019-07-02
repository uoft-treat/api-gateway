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

    getAllTemplates = async (_, {id}) => {
        if (!id) {
            return await this.experimentTemplateService.getAllExperimentTemplates();
        } else {
            return [await this.experimentTemplateService.getOneExperimentTemplateById(id)];
        }
    };

    createTemplate = async (_, {data: {name, description, link}}) => {
        return await this.experimentTemplateService.createExperimentTemplate(name, description, link);
    };

    getDataSchema = async (template: ExperimentTemplate) => {
        return await this.experimentTemplateService.getDataSchemaForExperimentTemplate(template);
    };

    updateTemplate = async (_, {id, data}) => {
        return await this.experimentTemplateService.updateOneExperimentTemplateById(id, data);
    };

    deleteTemplate = async (_, {id}) => {
        await this.experimentTemplateService.deleteOneExperimentTemplateById(id);
        return true;
    };

}
