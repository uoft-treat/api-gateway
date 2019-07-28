import container                      from "../../inversify.config";
import {ExperimentRegistryController} from "../../controller/ExperimentRegistryController";

const experimentRegistryController = container.get<ExperimentRegistryController>('ExperimentRegistryController');


export const experimentRegistry = {
    Mutation: {
        createExperiment: experimentRegistryController.createExperiment,
    },
    Query: {
        experiments: experimentRegistryController.getExperiments,
    },
    Experiment: {
        scriptSource: experimentRegistryController.getScriptSource,
        templateSource: experimentRegistryController.getTemplateSource,
    }
};
