import container                      from "../../inversify.config";
import {ExperimentTemplateController} from "../../controller/ExperimentTemplateController";

const experimentTemplateController = container.get<ExperimentTemplateController>('ExperimentTemplateController');

export const experimentTemplate = {
    ExperimentTemplate: {
        dataSchema: experimentTemplateController.getDataSchema
    },
    Query: {
        experimentTemplates: experimentTemplateController.getAllTemplates
    },
    Mutation: {
        createExperimentTemplate: experimentTemplateController.createTemplate,
        updateExperimentTemplate: experimentTemplateController.updateTemplate,
        deleteExperimentTemplate: experimentTemplateController.deleteTemplate,
    }
};
