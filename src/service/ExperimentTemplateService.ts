export type ExperimentTemplate = {
    _id: string,
    name: string,
    description: string,
    link: string,
}

export type ExperimentTemplatePatchBody = {
    name?: string,
    description?: string,
    link?: string,
}

export interface ExperimentTemplateService {

    getAllExperimentTemplates(): Promise<ExperimentTemplate[]>;

    createExperimentTemplate(name: string, description: string, link: string): Promise<string>;

    getOneExperimentTemplateById(id: string): Promise<ExperimentTemplate>;

    updateOneExperimentTemplateById(id: string, body: ExperimentTemplatePatchBody): Promise<string>;

    deleteOneExperimentTemplateById(id: string): Promise<void>;

    getDataSchemaForExperimentTemplate(template: ExperimentTemplate): Promise<string>;

}
