import {EntitySchema} from "@mikro-orm/core";
import {User} from "../../Domain/Entities/User";

export const UserSchema = new EntitySchema<User>({
    class: User,
    name: 'User',
    tableName: 'users',
    properties: {
        _id: {
            type: 'uuid',
            primary: true,
            unique: true
        },
        username: {
            type: 'string',
            unique: true
        },
        password: {
            type: 'string'
        },
        enable: {
            type: 'boolean'
        },
        created_at: {
            type: Date, onCreate: () => new Date()
        },
        updated_at: {
            type: Date, onUpdate: () => new Date()
        }
    }
})
