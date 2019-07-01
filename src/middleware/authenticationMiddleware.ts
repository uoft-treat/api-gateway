import {AuthenticationServiceImpl} from "../service/impl/AuthenticationServiceImpl";

export const authenticationMiddleware = async (req, res, next) => {
    if (req.headers.authorization) {
        try {
            req.user = await AuthenticationServiceImpl.getInstance().getUserByToken(req.headers.authorization);
        } catch (e) {
            // Do nothing
        }
    }
    next();
};
