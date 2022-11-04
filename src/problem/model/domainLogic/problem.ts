import getProblemApi from "../api/problem//getProblemApi";
import createProblemApi from "../api//problem/createProblemApi";
import Problem from "../problem";
import TestCase from "../testCase";
import MemoryLimit from "../memoryLimit";
import TimeLimits from "../timeLimit";
import Kilobyte from "../kilobyte";
import Millisecond from "../millisecond";
import listProblemApi from "../api/problem/listProblemApi";
import countProblemsApi from "../api/problem/countProblemsApi";

async function getProblemById(id: string): Promise<Problem> {
  const responseData = await getProblemApi({ id });

  const problem = new Problem(
    responseData.id,
    responseData.name,
    responseData.description,
    responseData.author,
    responseData.difficulty,
    responseData.acceptance,
    responseData.tags,
    responseData.status
  );
  responseData.memoryLimits.forEach((memoryLimit) => {
    problem.addMemoryLimit(
      new MemoryLimit(
        memoryLimit.programmingLanguage,
        new Kilobyte(memoryLimit.memoryLimit)
      )
    );
  });
  responseData.timeLimits.forEach((timeLimit) => {
    problem.addTimeLimit(
      new TimeLimits(
        timeLimit.programmingLanguage,
        new Millisecond(timeLimit.timeLimit)
      )
    );
  });
  responseData.allowedProgrammingLanguages.forEach(
    (allowedProgrammingLanguage) => {
      problem.addAllowedProgrammingLanguage(allowedProgrammingLanguage);
    }
  );
  return problem;
}

async function listProblem(page: number, perPage: number): Promise<Problem[]> {
  if (page < 0) throw new Error("page must be positive");
  if (perPage < 0) throw new Error("perPage must be positive");
  const responseData = await listProblemApi({ page, perPage });

  const problems: Problem[] = [];
  responseData.forEach((item) => {
    const problem = new Problem(
      item.id,
      item.name,
      item.description,
      item.author,
      item.difficulty,
      item.acceptance,
      item.tags,
      item.status
    );
    item.memoryLimits.forEach((memoryLimit) => {
      problem.addMemoryLimit(
        new MemoryLimit(
          memoryLimit.programmingLanguage,
          new Kilobyte(memoryLimit.memoryLimit)
        )
      );
    });
    item.timeLimits.forEach((timeLimit) => {
      problem.addTimeLimit(
        new TimeLimits(
          timeLimit.programmingLanguage,
          new Millisecond(timeLimit.timeLimit)
        )
      );
    });
    item.allowedProgrammingLanguages.forEach((allowedProgrammingLanguage) => {
      problem.addAllowedProgrammingLanguage(allowedProgrammingLanguage);
    });
    problems.push(problem);
  });
  return problems;
}

async function createProblem(problem: Problem): Promise<string> {
  const problemId = await createProblemApi({
    difficulty: problem.getDifficulty(),
    name: problem.getName(),
    description: problem.getDescription(),
    memoryLimits: problem.getMemoryLimits().map((memoryLimit) => ({
      programmingLanguage: memoryLimit.getProgrammingLanguage(),
      memoryLimit: Number(memoryLimit.getMemoryLimit()),
    })),
    timeLimits: problem.getTimeLimits().map((timeLimit) => ({
      programmingLanguage: timeLimit.getProgrammingLanguage(),
      timeLimit: Number(timeLimit.getTimeLimit()),
    })),
    allowedProgrammingLanguages: problem.getAllowedProgrammingLanguages(),
  });

  return problemId;
}

async function countProblems() {
  return await countProblemsApi();
}

export { getProblemById, listProblem, createProblem, countProblems };
