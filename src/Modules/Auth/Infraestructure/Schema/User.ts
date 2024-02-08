import { Entity, PrimaryKey, Property } from '@mikro-orm/core';

@Entity()
export class UserEntity
{
    @PrimaryKey({
        unique: true
    })
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


