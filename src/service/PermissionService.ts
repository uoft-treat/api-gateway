import {User} from "./AuthenticationService";

export interface PermissionService {

    canCreateUser(user: User): Promise<void>;

}
