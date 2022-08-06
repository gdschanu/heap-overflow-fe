import { assert } from "@vue/compiler-core";
import { ProblemScore } from "./problemScore";

class Participant {
  _coderId: string;
  _rank: number | undefined;
  _problemScores: ProblemScore[];
  _contestId: string;

  constructor(
    coderId: string,
    rank: number | undefined,
    problemScores: ProblemScore[],
    contestId: string
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
}

export { Participant };
