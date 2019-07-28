export type Experiment = {
    name: string,
    author: string,
    uuid: string,
}

export interface ExperimentRegistryService {

    getAllExperiments(): Promise<Experiment[]>;

    getOneExperimentByUuid(uuid: string): Promise<Experiment>;

    createExperiment(name: string, author: string, templateSource: string, scriptSource: string): Promise<Experiment[]>;

    getOneExperimentTemplateSource(uuid: string): Promise<string>;

    getOneExperimentScriptSource(uuid: string): Promise<string>;

}
