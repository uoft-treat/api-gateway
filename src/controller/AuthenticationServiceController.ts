import {AuthenticationServiceImpl} from "../service/impl/AuthenticationServiceImpl";
import {AuthenticationService}     from "../service/AuthenticationService";
import {PermissionService}         from "../service/PermissionService";
import {PermissionServiceImpl}     from "../service/impl/PermissionServiceImpl";

let instance: AuthenticationServiceController = null;

export class AuthenticationServiceController {

    authenticationService: AuthenticationService;
    permissionService: PermissionService;

    constructor(
        authenticationService: AuthenticationService,
        permissionService: PermissionService,
    ) {
        this.authenticationService = authenticationService;
        this.permissionService = permissionService;
    }

    createUser = async (obj, {username, password}, {user}) => {
        await this.permissionService.canCreateUser(user);
        return await this.authenticationService.createUser(username, password);
    };

    createToken = async (obj, {username, password}) => {
        return await this.authenticationService.createUserTokenByUsernameAndPassword(username, password);
    };

    static getInstance() {
        if (!instance) {
            instance = new AuthenticationServiceController(
                AuthenticationServiceImpl.getInstance(),
                PermissionServiceImpl.getInstance(),
            );
        }
        return instance;
    }

}
