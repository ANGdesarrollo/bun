export interface IBaseMikroORM<T extends object> {
    create(payload: T): Promise<T>;
    list(): Promise<T[]>;
    getOneBy(condition: Record<string, any>): Promise<T>;
    update(entity: T): Promise<T>;
}
