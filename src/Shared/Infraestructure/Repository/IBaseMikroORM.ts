import { Loaded } from '@mikro-orm/core';

export interface IBaseMikroORM<T extends object, D extends object> {
    create(payload: T): Promise<T>;

    list(): Promise<Loaded<T>[]>;
    getOneBy(condition: Record<string, any>): Promise<T>;
    update(entity: T): Promise<T>;
}
