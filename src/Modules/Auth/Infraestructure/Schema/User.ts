import { Entity, PrimaryKey, Property } from '@mikro-orm/core';

@Entity({
    tableName: 'users'
})
export class UserEntity
{
    @PrimaryKey()
    _id: string;

    @Property({
        unique: true
    })
    username: string;

    @Property()
    password: string;

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


