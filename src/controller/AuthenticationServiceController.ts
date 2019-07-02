import {AuthenticationService} from "../service/AuthenticationService";
import {PermissionService}     from "../service/PermissionService";
import {inject, injectable}    from "inversify";

@injectable()
export class AuthenticationServiceController {

    authenticationService: AuthenticationService;
    permissionService: PermissionService;

    constructor(
        @inject('AuthenticationService') authenticationService: AuthenticationService,
        @inject('PermissionService') permissionService: PermissionService,
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

    getMe = async (_, __, {user}) => {
        return user;
    };

}
