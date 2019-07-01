import {AuthenticationService, User, UserToken} from "../AuthenticationService";
import axios                                    from "axios";
import {customErrorWrapper}                     from "../../configuration/customErrorWrapper";
import {DiscoveryService}                       from "../DiscoveryService";
import {DiscoveryServiceImpl}                   from "./DiscoveryServiceImpl";

let instance: AuthenticationServiceImpl = null;

const AUTHENTICATION_SERVICE_NAME = 'authentication-service';

export class AuthenticationServiceImpl implements AuthenticationService {

    discoveryService: DiscoveryService;

    constructor(discoveryService: DiscoveryService) {
        this.discoveryService = discoveryService;
    }

    async createUser(username: string, password: string): Promise<User> {
        try {
            return (await axios.post(
                (await this.discoveryService.resolve(AUTHENTICATION_SERVICE_NAME)) + "/users",
                {username, password}
            )).data;
        } catch (e) {
            return customErrorWrapper(e);
        }
    }

    async createUserTokenByUsernameAndPassword(username: string, password: string): Promise<UserToken> {
        try {
            return (await axios.post(
                (await this.discoveryService.resolve(AUTHENTICATION_SERVICE_NAME)) + "/tokens",
                {username, password}
            )).data;
        } catch (e) {
            return customErrorWrapper(e);
        }
    }

    async getUserByToken(body: string): Promise<User> {
        try {
            return (await axios.get(
                (await this.discoveryService.resolve(AUTHENTICATION_SERVICE_NAME)) + "/tokens/" + body,
            )).data;
        } catch (e) {
            return customErrorWrapper(e);
        }
    }

    static getInstance() {
        if (!instance) {
            instance = new AuthenticationServiceImpl(new DiscoveryServiceImpl());
        }
        return instance;
    }

}
