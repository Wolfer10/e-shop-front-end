import {Product} from "./product";

export class Shoe implements Product{

  constructor(private _id: String, private _name: String, private _price: Number, private _type: String) {
  }

  get id(): String{
    return this._id;
  }

  get name(): String{
    return this._name;
  }

  get price() : Number {
    return this._price;
  }
  get type(): String{
    return this._type;
  }


}
