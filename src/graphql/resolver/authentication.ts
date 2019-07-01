import {AuthenticationServiceController} from "../../controller/AuthenticationServiceController";

export const authentication = {
    Query: {
        me: AuthenticationServiceController.getInstance().getMe,
    },
    Mutation: {
        createUser: AuthenticationServiceController.getInstance().createUser,
        createUserToken: AuthenticationServiceController.getInstance().createToken
    }
};
