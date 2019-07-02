import {PermissionService}  from "../PermissionService";
import {User, UserRoleEnum} from "../AuthenticationService";
import {PermissionError}    from "../error/PermissionError";
import {injectable}         from "inversify";

let instance: PermissionServiceImpl = null;

@injectable()
export class PermissionServiceImpl implements PermissionService {


    async canCreateUser(user: User): Promise<void> {
        if (!user || user.roles.indexOf(UserRoleEnum.ADMIN) < 0) {
            throw new PermissionError("You don't have enough permission to create a new user.");
        }
    }

    static getInstance() {
        if (!instance) {
            instance = new PermissionServiceImpl();
        }
        return instance;
    }

}