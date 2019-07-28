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

}