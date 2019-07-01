import {gql} from "apollo-server-express";

export const authentication = gql`
    
    enum UserRoleEnum {
        ADMIN
    }
    
    type User {
        username: String,
        roles: [UserRoleEnum],
    }
    
    type UserToken {
        body: String
    }
    
    extend type Query {
        "Get currently authenticated user."
        me: User
    }
    
    extend type Mutation {
        
        "Create a new user. Default role will be ADMIN."
        createUser(
            username: String!,
            password: String!
        ): User
        
        "Create a new authentication token."
        createUserToken(
            username: String!,
            password: String!
        ): UserToken
        
    }
    
`;
