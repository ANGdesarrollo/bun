import {EntitySchema} from '@mikro-orm/core';
import { User } from '../../Domain/Entities/User';

export const UserEntity = new EntitySchema({
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
            type: 'boolean',
            default: false
        },
        createdAt: {
            type: 'Date',
            onCreate: () => new Date(), nullable: true
        },
        updatedAt: {
            type: 'Date',
            onCreate: () => new Date(),
            onUpdate: () => new Date(), nullable: true
        }
    }
});
