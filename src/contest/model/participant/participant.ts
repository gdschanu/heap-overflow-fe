import { assert } from "@vue/compiler-core";
import { ProblemScore } from "./problemScore";

class Participant {
  _version: number;
  _coderId: string;
  _rank: number | undefined;
  _problemScores: ProblemScore[];
  _contestId: string;
  _createdAt: string;
  _username: string;

  constructor(
    version: number,
    coderId: string,
    rank: number | undefined,
    problemScores: ProblemScore[],
    contestId: string,
    createdAt: string,
    username: string
  ) {
    assert(coderId === undefined || typeof coderId === "string");
    this._coderId = coderId;

    assert(rank === undefined || !isNaN(rank));
    this._rank = rank;

    assert(Array.isArray(problemScores));
    this._problemScores = [];
    for (const ps of problemScores) {
      assert(ps !== undefined && typeof ps === "object");
      this._problemScores.push(ps);
    }

    assert(contestId !== undefined && typeof contestId === "string");
    this._contestId = contestId;

    this._version = version;
    this._createdAt = createdAt;
    this._username = username;
  }

  getCoderId(): string {
    return this._coderId;
  }

  getRank(): number {
    return this._rank!;
  }

  getProblemScores() {
    return this._problemScores;
  }

  getVersion() {
    return this._version;
  }

  getCreatedAt() {
    return this._createdAt;
  }

  getUsername() {
    return this._username;
  }
}

export { Participant };
