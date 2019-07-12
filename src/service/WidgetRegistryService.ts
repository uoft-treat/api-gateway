export type Widget = {
    name: string,
    author: string,
    uuid: string,
}

export interface WidgetRegistryService {

    getAllWidgets(): Promise<Widget[]>;

    getOneWidgetByUuid(uuid: string): Promise<Widget>;

    createWidget(name: string, author: string, templateSource: string, styleSource: string, scriptSource: string): Promise<Widget[]>;

    getOneWidgetTemplateSource(uuid: string): Promise<string>;

    getOneWidgetStyleSource(uuid: string): Promise<string>;

    getOneWidgetScriptSource(uuid: string): Promise<string>;

}