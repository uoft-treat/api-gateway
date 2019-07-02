import {AuthenticationServiceController} from "../../controller/AuthenticationServiceController";
import container                         from "../../inversify.config";

const authenticationServiceController = container.get<AuthenticationServiceController>('AuthenticationServiceController');

export const authentication = {
    Query: {
        me: authenticationServiceController.getMe,
    },
    Mutation: {
        createUser: authenticationServiceController.createUser,
        createUserToken: authenticationServiceController.createToken
    }
};
