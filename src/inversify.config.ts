import {Container}                       from "inversify";
import {DiscoveryService}                from "./service/DiscoveryService";
import {DiscoveryServiceImpl}            from "./service/impl/DiscoveryServiceImpl";
import {AuthenticationService}           from "./service/AuthenticationService";
import {AuthenticationServiceImpl}       from "./service/impl/AuthenticationServiceImpl";
import {PermissionService}               from "./service/PermissionService";
import {PermissionServiceImpl}           from "./service/impl/PermissionServiceImpl";
import {AuthenticationServiceController} from "./controller/AuthenticationServiceController";
import {ExperimentTemplateController}    from "./controller/ExperimentTemplateController";
import {ExperimentTemplateService}       from "./service/ExperimentTemplateService";
import {ExperimentTemplateServiceImpl}   from "./service/impl/ExperimentTemplateServiceImpl";
import {WidgetRegistryService}           from "./service/WidgetRegistryService";
import {WidgetRegistryServiceImpl}       from "./service/impl/WidgetRegistryServiceImpl";
import {WidgetRegistryController}        from "./controller/WidgetRegistryController";

const container = new Container();

container.bind<DiscoveryService>('DiscoveryService').to(DiscoveryServiceImpl);
container.bind<AuthenticationService>('AuthenticationService').to(AuthenticationServiceImpl);
container.bind<PermissionService>('PermissionService').to(PermissionServiceImpl);
container.bind<ExperimentTemplateService>('ExperimentTemplateService').to(ExperimentTemplateServiceImpl);
container.bind<WidgetRegistryService>('WidgetRegistryService').to(WidgetRegistryServiceImpl);

container.bind<AuthenticationServiceController>('AuthenticationServiceController').to(AuthenticationServiceController);
container.bind<ExperimentTemplateController>('ExperimentTemplateController').to(ExperimentTemplateController);
container.bind<WidgetRegistryController>('WidgetRegistryController').to(WidgetRegistryController);


export default container;
