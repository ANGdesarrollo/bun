import Elysia from 'elysia';
import {beforeAll, test, expect} from "bun:test";

let app: any;
let server: any;

beforeAll(() => {
    app = new Elysia();
    app.get("/", () => "Hello Elysia");
    server = app.listen(3000);
});

test('test baase endpoint', async () => {
    const response = await fetch('http://localhost:3000');
    const data = await response.text();
    expect(data).toBe('Hello Elysia');
});
