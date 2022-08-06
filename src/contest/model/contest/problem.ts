import { assert } from "@vue/compiler-core";


class Problem {
  _ordinal;
  _coreProblemId;
  _score;
  constructor(
    ordinal: number,
    coreProblemId: string,
    score: number
  ) {
    assert(!isNaN(ordinal))
    this._ordinal = ordinal

    assert(typeof coreProblemId === 'string')
    this._coreProblemId = coreProblemId

    assert(!isNaN(score))
    this._score = score
  }

  getOrdinal() {
    return this._ordinal;
  }
}

export {
  Problem
}