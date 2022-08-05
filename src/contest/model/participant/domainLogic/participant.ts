import assert from "assert";
import { Participant } from "../participant";

function createParticipant(contestId: string) {
  assert(typeof contestId === "string");
  return new Participant("", undefined, [], contestId);
}

export { createParticipant };
