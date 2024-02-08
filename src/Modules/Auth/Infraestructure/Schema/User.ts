import { Entity, EntitySchema, PrimaryKey, Property, Unique } from '@mikro-orm/core';
import { User } from '../../Domain/Entities/User';

// export const UserEntity = new EntitySchema<User>({
//     name: 'User',
//     properties: {
//         _id: {
//             type: 'uuid',
//             primary: true,
//             unique: 'true'
//         },
//         username: {
//             type: 'string',
//             unique: true
//         },
//         password: {
//             type: 'string'
//         },
//         enable: {
//             type: 'boolean',
//             default: false
//         },
//         createdAt: {
//             type: 'Date',
//             onCreate: () => new Date(), nullable: true
//         },
//         updatedAt: {
//             type: 'Date',
//             onCreate: () => new Date(),
//             onUpdate: () => new Date(), nullable: true
//         }
//     }
// });

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


