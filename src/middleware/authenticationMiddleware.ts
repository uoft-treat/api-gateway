import container               from "../inversify.config";
import {AuthenticationService} from "../service/AuthenticationService";

const authenticationService = container.get<AuthenticationService>('AuthenticationService');

export const authenticationMiddleware = async (req, res, next) => {
    if (req.headers.authorization) {
        try {
            req.user = await authenticationService.getUserByToken(req.headers.authorization);
        } catch (e) {
            // Do nothing
        }
    }
    next();
};
