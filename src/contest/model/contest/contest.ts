import { assert } from "@vue/compiler-core";
import { Problem } from "./problem";

class Contest {
  private _id: string;
  private _name: string;
  private _description: string;
  private _startAt!: string | number | Date;
  private _endAt!: string | number | Date;
  private _author: string;
  private _problems: Problem[];
  constructor(
    id: string,
    name: string,
    description: string,
    startAt: string | number | Date,
    endAt: string | number | Date,
    author: string,
    problems: Problem[]
  ) {
    this._id = id;
    this._name = name;
    this._description = description;
    assert(
      startAt == undefined ||
        typeof startAt === "string" ||
        startAt instanceof Date
    );
    if (startAt !== undefined) this._startAt = new Date(startAt);

    assert(
      endAt == undefined || typeof endAt === "string" || endAt instanceof Date
    );
    if (endAt !== undefined) this._endAt = new Date(endAt);

    assert(author == undefined || typeof author === "string");
    this._author = author;

    assert(Array.isArray(problems));
    this._problems = [];
    if (problems) {
      for (const problem of problems!) {
        assert(problem !== undefined && typeof problem === "object");
        this._problems.push(problem);
      }
    }
  }

  static create(): Contest {
    return new Contest("", "", "", "", "", "", []);
  }

  setName(name: string) {
    assert(typeof name === "string");

    if (name.length == 0) {
      throw new Error("Name to short");
    }
    this._name = name;
  }

  setDescription(description: string) {
    assert(typeof description === "string");

    this._description = description;
  }

  ordinalExisted(ordinal: number) {
    assert(!isNaN(ordinal));

    for (const prob of this._problems) {
      if (prob.getOrdinal() == ordinal) {
        return true;
      }
    }
    return false;
  }

  sortProblemsByOrdinal() {
    this._problems.sort((a, b) => {
      if (a.getOrdinal() < b.getOrdinal()) {
        return -1;
      } else if (a.getOrdinal() > b.getOrdinal()) {
        return 1;
      }
      return 0;
    });
  }

  setStartAt(date: Date) {
    if (!(date instanceof Date)) {
      throw new Error('Argument "date" must be of type "Date"');
    }
    if (date.getTime() <= new Date().getTime()) {
      throw new Error("Start at must be later than now");
    }
    this._startAt = date;
  }

  setEndAt(date: Date) {
    if (!(date instanceof Date)) {
      throw new Error('Argument "date" must be of type "Date"');
    }
    if (date.getTime() <= new Date().getTime()) {
      throw new Error("End at must be later than now");
    }
    if (this._startAt !== undefined && date.getTime() <= this._startAt) {
      throw new Error("End at must be later than start at");
    }
    this._endAt = date;
  }

  getId() {
    return this._id;
  }

  getName() {
    return this._name;
  }

  getAuthor() {
    return this._author;
  }

  getDescription() {
    return this._description;
  }

  getStartAt() {
    return new Date(this._startAt);
  }

  getEndAt() {
    return new Date(this._endAt);
  }

  getProblems() {
    return this._problems;
  }
}

export { Contest, Problem };

export function create() {
  throw new Error("Function not implemented.");
}
