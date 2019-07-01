import {AuthenticationServiceImpl} from "../service/impl/AuthenticationServiceImpl";
import {AuthenticationService}     from "../service/AuthenticationService";

let instance: AuthenticationServiceController = null;

export class AuthenticationServiceController {

    authenticationService: AuthenticationService;

    constructor(authenticationService: AuthenticationService) {
        this.authenticationService = authenticationService;
    }

    createUser = async (obj, {username, password}) => {
        return await this.authenticationService.createUser(username, password);
    };

    createToken = async (obj, {username, password}) => {
        return await this.authenticationService.createUserTokenByUsernameAndPassword(username, password);
    };

    static getInstance() {
        if (!instance) {
            instance = new AuthenticationServiceController(AuthenticationServiceImpl.getInstance());
        }
        return instance;
    }

}
