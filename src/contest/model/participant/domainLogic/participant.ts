import { assert } from "@vue/compiler-core";

import { Participant } from "../participant";

function createParticipant(contestId: string) {
  assert(typeof contestId === "string");
  return new Participant("", undefined, [], contestId);
}

export { createParticipant };
