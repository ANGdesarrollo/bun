import { Entity, PrimaryKey, Property, Unique } from '@mikro-orm/core';
import { Role } from '../../Domain/Entities/Role';

@Entity({
    tableName: 'users'
})
export class UserEntity
{
    @PrimaryKey()
    _id: string;

    @Property()
    @Unique()
    username: string;

    @Property()
    password: string;

    @Property({
        default: Role.user
    })
    role: string;

    @Property({
        default: false
    })
    enable: boolean;

    @Property({ onCreate: () => new Date() })
    createdAt: string;

    @Property({
        onUpdate: () => new Date(),
        onCreate: () => new Date()
    })
    updatedAt: Date;
}


