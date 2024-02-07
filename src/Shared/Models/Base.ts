import { v4 as uuidv4 } from 'uuid';
export class Base
{
    _id: string;

    constructor()
    {
        this._id = uuidv4();
    }

    getId()
    {
        return this._id;
    }

    setId()
    {
        this._id = uuidv4();
    }
}
