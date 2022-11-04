import programmingLanguage from "./programmingLanguage";
import Millisecond from "./millisecond";

class TimeLimit {
  private programmingLanguage: programmingLanguage;
  private timeLimit: Millisecond;

  constructor(
    programmingLanguage: programmingLanguage,
    timeLimit: Millisecond
  ) {
    this.programmingLanguage = programmingLanguage;
    this.timeLimit = timeLimit;
  }

  setTimeLimit(timeLimit: Millisecond) {
    this.timeLimit = timeLimit;
  }

  getProgrammingLanguage(): programmingLanguage {
    return this.programmingLanguage;
  }

  getTimeLimit(): Millisecond {
    return this.timeLimit;
  }
}

export default TimeLimit;
