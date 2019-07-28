import {inject, injectable}        from "inversify";
import {ExperimentRegistryService} from "../service/ExperimentRegistryService";

@injectable()
export class ExperimentRegistryController {

    private experimentRegistryService: ExperimentRegistryService;

    constructor(
        @inject("ExperimentRegistryService") experimentRegistryService: ExperimentRegistryService
    ) {
        this.experimentRegistryService = experimentRegistryService;
    }

    createExperiment = async (_, {data: {name, author, templateSource, scriptSource}}) => {
        return await this.experimentRegistryService.createExperiment(name, author, templateSource, scriptSource);
    };

    getExperiments = async (_, {uuid}) => {
        if(uuid) {
            return [await this.experimentRegistryService.getOneExperimentByUuid(uuid)];
        } else {
            return await this.experimentRegistryService.getAllExperiments();
        }
    };

    getScriptSource = async ({uuid}) => {
        return await this.experimentRegistryService.getOneExperimentScriptSource(uuid);
    };

    getTemplateSource = async ({uuid}) => {
        return await this.experimentRegistryService.getOneExperimentTemplateSource(uuid);
    };

}