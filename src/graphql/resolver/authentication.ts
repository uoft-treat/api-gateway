import {AuthenticationServiceController} from "../../controller/AuthenticationServiceController";

export const authentication = {
    Mutation: {
        createUser: AuthenticationServiceController.getInstance().createUser,
        createUserToken: AuthenticationServiceController.getInstance().createToken
    }
};
