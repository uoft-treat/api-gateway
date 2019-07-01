export enum UserRoleEnum {
    ADMIN = "ADMIN",
}

export type User = {
    username: string,
    roles: UserRoleEnum[],
}

export type UserToken = {
    body: string,
}

export interface AuthenticationService {

    createUser(username: string, password: string): Promise<User>;

    createUserTokenByUsernameAndPassword(username: string, password: string): Promise<UserToken>;

    getUserByToken(body: string): Promise<User>;

}
