class Progress {
  _difficulty: string | undefined;
  _done: number | undefined;
  _problems: number | undefined;
  _percentage: number | undefined;

  constructor(
    difficulty: string | undefined,
    done: number | undefined,
    problems: number | undefined,
    percentage: number | undefined
  ) {
    this._difficulty = difficulty;
    this._done = done;
    this._problems = problems;
    this._percentage = percentage;
  }

  getDifficulty(): string {
    return this._difficulty!;
  }

  getDone(): number {
    return this._done!;
  }

  getProblems(): number {
    return this._problems!;
  }

  getPercentage(): number {
    return this._percentage!;
  }
}

export { Progress };
