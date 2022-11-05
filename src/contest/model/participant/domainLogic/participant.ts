import { assert } from "@vue/compiler-core";
import { countParticipantsAPI } from "../api/countParticipant";
import { getParticipantsAPI } from "../api/getParticipant";
import { Participant } from "../participant";

async function getParticipants(
  contestId: string,
  page: number,
  perPage: number
): Promise<Participant[]> {
  if (page < 0) {
    throw new Error("page must be greater than 0");
  }
  if (perPage < 0) {
    throw new Error("perPage must be greater than 0");
  }

  const participants: Participant[] = [];
  const response = await getParticipantsAPI({ contestId, page, perPage });
  response.data!.forEach((item) => {
    const participant = new Participant(
      item.version,
      item.coderId,
      item.rank,
      item.problemScores,
      item.contestId,
      item.createdAt,
      item.username
    );
    participants.push(participant);
  });
  return participants;
}

async function countParticipants(contestId: string) {
  const numberOfParticipants = (await countParticipantsAPI({ contestId })).data;
  return numberOfParticipants;
}
export { getParticipants, countParticipants };
