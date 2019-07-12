import {inject, injectable}    from "inversify";
import {WidgetRegistryService} from "../service/WidgetRegistryService";

@injectable()
export class WidgetRegistryController {

    private widgetRegistryService: WidgetRegistryService;

    constructor(
        @inject("WidgetRegistryService") widgetRegistryService: WidgetRegistryService
    ) {
        this.widgetRegistryService = widgetRegistryService;
    }

    getWidgets = async (_, {uuid}) => {
        if(uuid) {
            return [await this.widgetRegistryService.getOneWidgetByUuid(uuid)];

        } else {
            return await this.widgetRegistryService.getAllWidgets();
        }
    };

    createWidget = async (_, {data: {name, author, templateSource, styleSource, scriptSource}}) => {
        return await this.widgetRegistryService.createWidget(name, author, templateSource, styleSource, scriptSource);
    };

    getTemplateSource = async ({uuid}) => {
        return await this.widgetRegistryService.getOneWidgetTemplateSource(uuid);
    };

    getScriptSource = async ({uuid}) => {
        return await this.widgetRegistryService.getOneWidgetScriptSource(uuid);
    };

    getStyleSource = async ({uuid}) => {
        return await this.widgetRegistryService.getOneWidgetStyleSource(uuid);
    };

}