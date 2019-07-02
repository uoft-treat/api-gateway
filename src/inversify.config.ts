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

const container = new Container();

container.bind<DiscoveryService>('DiscoveryService').to(DiscoveryServiceImpl);
container.bind<AuthenticationService>('AuthenticationService').to(AuthenticationServiceImpl);
container.bind<PermissionService>('PermissionService').to(PermissionServiceImpl);
container.bind<ExperimentTemplateService>('ExperimentTemplateService').to(ExperimentTemplateServiceImpl);


container.bind<AuthenticationServiceController>('AuthenticationServiceController').to(AuthenticationServiceController);
container.bind<ExperimentTemplateController>('ExperimentTemplateController').to(ExperimentTemplateController);


export default container;
