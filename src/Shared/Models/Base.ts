import { v4 as uuidv4 } from 'uuid';
export class Base {
    _id: uuidv4

    constructor() {
        this._id = uuidv4();
    }

    getId() {
        return this._id;
    }

    setId() {
        this._id = uuidv4();
    }
}
