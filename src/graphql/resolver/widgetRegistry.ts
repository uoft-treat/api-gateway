import container                  from "../../inversify.config";
import {WidgetRegistryController} from "../../controller/WidgetRegistryController";

const widgetRegistryController = container.get<WidgetRegistryController>('WidgetRegistryController');


export const widgetRegistry = {
    Query: {
        widgets: widgetRegistryController.getWidgets,
    },
    Mutation: {
        createWidget: widgetRegistryController.createWidget,
    },
    Widget: {
        templateSource: widgetRegistryController.getTemplateSource,
        styleSource: widgetRegistryController.getStyleSource,
        scriptSource: widgetRegistryController.getScriptSource,
    }
};
