import {ApolloError} from "apollo-server-express";

export const customErrorWrapper = (e) => {
    if(e.response) {
        if(e.response.status === 400) {
            throw new ApolloError(e.response.data.message, "BAD_REQUEST");
        } else if (e.response.status === 404) {
            throw new ApolloError(e.response.data.message, "NOT_FOUND");
        } else if (e.response.status === 500) {
            throw new ApolloError(e.response.data.message, "BAD_GATEWAY");
        } else if (e.response.status === 409) {
            throw new ApolloError(e.response.data.message, "CONFLICT");
        }
    }
    throw e;
};
