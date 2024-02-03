import Elysia from "elysia";
import {MikroORM } from '@mikro-orm/mongodb';
import { MongoHighlighter } from '@mikro-orm/mongo-highlighter';
import { Options } from '@mikro-orm/core';
import { Entity, PrimaryKey, Property } from "@mikro-orm/core";
import { ObjectId } from "@mikro-orm/mongodb";

const app = new Elysia().get("/", () => "Hello Elysia").listen(process.env.PORT);
console.log(
    `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
);



@Entity()
export class Item {
    @PrimaryKey()
    _id!: ObjectId;
    @Property()
    name!: string;
}

const options: Options = {
    entities: [Item],
    dbName: 'mikro-orm-express-ts',
    highlighter: new MongoHighlighter(),
    debug: true,
};

const config = {
    entities: [Item],
    dbName: 'bundb',
    clientUrl: process.env.MONGO_URL,
};

const orm = await MikroORM.init(config);

