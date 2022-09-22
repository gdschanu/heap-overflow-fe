class TopUser {
  _id: string | undefined;
  _name: string | undefined;
  _age: number | undefined;
  _avatar: string | undefined;
  _phone: string | number | undefined;
  _university: string | undefined;
  _slogan: string | undefined;
  _gender: string | undefined;
  _address: string | undefined;
  _rank: number | undefined;

  constructor(
    id: string | undefined,
    name: string | undefined,
    age: number | undefined,
    avatar: string | undefined,
    phone: string | undefined | number,
    university: string | undefined,
    slogan: string | undefined,
    gender: string | undefined,
    address: string | undefined,
    rank: number | undefined
  ) {
    this._id = id;
    this._name = name;
    this._age = age;
    this._avatar = avatar;
    this._phone = phone;
    this._university = university;
    this._slogan = slogan;
    this._gender = gender;
    this._address = address;
    this._rank = rank;
  }

  getId() {
    return this._id!;
  }

  getName() {
    return this._name!;
  }

  getAvatar() {
    return this._avatar!;
  }

  getRank() {
    return this._rank!;
  }
}

export { TopUser };
