import {Widget, WidgetRegistryService} from "../WidgetRegistryService";
import {inject, injectable}            from "inversify";
import {DiscoveryService}              from "../DiscoveryService";
import axios                           from "axios";
import {customErrorWrapper}            from "../../configuration/customErrorWrapper";

const WIDGET_REGISTRY_SERVICE_NAME = 'widget-registry-service';


@injectable()
export class WidgetRegistryServiceImpl implements WidgetRegistryService {

    discoveryService: DiscoveryService;

    constructor(
        @inject('DiscoveryService') discoveryService: DiscoveryService
    ) {
        this.discoveryService = discoveryService;
    }

    async getAllWidgets(): Promise<Widget[]> {
        try {
            return (await axios.get(
                (await this.discoveryService.resolve(WIDGET_REGISTRY_SERVICE_NAME)) + "/widgets",
            )).data;
        } catch (e) {
            return customErrorWrapper(e);
        }
    }

    async createWidget(name: string, author: string, templateSource: string, styleSource: string, scriptSource: string): Promise<Widget[]> {
        try {
            return (await axios.post(
                (await this.discoveryService.resolve(WIDGET_REGISTRY_SERVICE_NAME)) + "/widgets",
                {name, author, templateSource, styleSource, scriptSource}
            )).data;
        } catch (e) {
            return customErrorWrapper(e);
        }
    }

    async getOneWidgetByUuid(uuid: string): Promise<Widget> {
        try {
            return (await axios.get(
                (await this.discoveryService.resolve(WIDGET_REGISTRY_SERVICE_NAME)) + "/widgets/" + uuid,
            )).data;
        } catch (e) {
            return customErrorWrapper(e);
        }
    }

    async getOneWidgetScriptSource(uuid: string): Promise<string> {
        try {
            return (await axios.get(
                (await this.discoveryService.resolve(WIDGET_REGISTRY_SERVICE_NAME)) + "/widgets/" + uuid + "/scriptSource",
            )).data;
        } catch (e) {
            return customErrorWrapper(e);
        }
    }

    async getOneWidgetStyleSource(uuid: string): Promise<string> {
        try {
            return (await axios.get(
                (await this.discoveryService.resolve(WIDGET_REGISTRY_SERVICE_NAME)) + "/widgets/" + uuid + "/styleSource",
            )).data;
        } catch (e) {
            return customErrorWrapper(e);
        }
    }

    async getOneWidgetTemplateSource(uuid: string): Promise<string> {
        try {
            return (await axios.get(
                (await this.discoveryService.resolve(WIDGET_REGISTRY_SERVICE_NAME)) + "/widgets/" + uuid + "/templateSource",
            )).data;
        } catch (e) {
            return customErrorWrapper(e);
        }
    }


}