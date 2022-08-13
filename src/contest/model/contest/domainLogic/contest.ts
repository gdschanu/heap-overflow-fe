import { createContestAPI } from "../api/createContest";
import { searchContestAPI } from "../api/searchContest";
import { countContestAPI } from "../api/countContest";
import { Contest } from "../contest";

async function createContest(contest: Contest): Promise<string | null> {
  const response = await createContestAPI({
    name: contest.getName(),
    description: contest.getDescription(),
    startAt: contest.getStartAt().toISOString as unknown as string,
    endAt: contest.getEndAt().toISOString as unknown as string,
  });
  return response.data; // id of contest
}

async function searchContest(
  page: number,
  perPage: number
): Promise<Contest[]> {
  if (page < 0) {
    throw new Error("page must be greater than 0");
  }
  if (perPage < 0) {
    throw new Error("perPage must be greater than 0");
  }

  const contests: Contest[] = [];
  const response = await searchContestAPI({ page, perPage });
  response.data!.forEach((item) => {
    const contest = new Contest(
      item.id,
      item.name,
      item.description,
      item.startAt,
      item.endAt,
      item.createdBy,
      item.problems
    );
    contests.push(contest);
  });
  return contests;
}

async function countContest(): Promise<string | null> {
  const response = await countContestAPI();
  return response.data!;
}

export { createContest, searchContest, countContest };
