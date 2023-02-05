import Difficulty from "@/problem/model/difficulty";
import getProgressApi from "../api/progressAPI";
import Process from "../progress";

async function getProgress(): Promise<Process[]> {
  const progressList: Process[] = [];
  const response = await getProgressApi();
  response.data!.forEach((item) => {
    const progress = new Process(
      item.difficulty as Difficulty,
      item.done,
      item.problems,
      item.percentage
    );
    progressList.push(progress);
  });

  return progressList;
}

export { getProgress };
