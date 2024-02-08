export interface IMikroORMInstance {
    initDatabase(): Promise<void>;
}
