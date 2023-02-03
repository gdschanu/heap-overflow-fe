import Difficulty from "@/problem/model/difficulty";

class Progress {
  private _difficulty: Difficulty;
  private _done: number;
  private _problems: number;
  private _percentage: number;

  constructor(
    difficulty: Difficulty,
    done: number,
    problems: number,
    percentage: number
  ) {
    this._difficulty = difficulty;
    this._done = done;
    this._problems = problems;
    this._percentage = percentage;
  }

  get difficulty(): Difficulty {
    return this._difficulty!;
  }

  get done(): number {
    return this._done!;
  }

  get problems(): number {
    return this._problems!;
  }

  get percentage(): number {
    return this._percentage!;
  }
}

export default Progress ;
