import {Experiment, ExperimentRegistryService} from "../ExperimentRegistryService";
import {DiscoveryService}                      from "../DiscoveryService";
import {inject, injectable}                    from "inversify";
import axios                                   from "axios";
import {customErrorWrapper}                    from "../../configuration/customErrorWrapper";

const EXPERIMENT_REGISTRY_SERVICE_NAME = 'experiment-registry-service';


@injectable()
export class ExperimentRegistryServiceImpl implements ExperimentRegistryService {

    discoveryService: DiscoveryService;

    constructor(
        @inject('DiscoveryService') discoveryService: DiscoveryService
    ) {
        this.discoveryService = discoveryService;
    }

    async createExperiment(name: string, author: string, templateSource: string, scriptSource: string): Promise<Experiment[]> {
        try {
            return (await axios.post(
                (await this.discoveryService.resolve(EXPERIMENT_REGISTRY_SERVICE_NAME)) + "/experiments",
                {name, author, templateSource, scriptSource}
            )).data;
        } catch (e) {
            return customErrorWrapper(e);
        }
    }

    getAllExperiments(): Promise<Experiment[]> {
        return undefined;
    }

    getOneExperimentByUuid(uuid: string): Promise<Experiment> {
        return undefined;
    }

    getOneExperimentScriptSource(uuid: string): Promise<string> {
        return undefined;
    }

    getOneExperimentTemplateSource(uuid: string): Promise<string> {
        return undefined;
    }

}