import { getProgressAPI } from "../api/progressAPI";
import { Progress } from "../progress";

async function getProgress(): Promise<Progress[]> {
  const progressList: Progress[] = [];
  const response = await getProgressAPI();
  response.data!.forEach((item) => {
    const progress = new Progress(
      item.difficulty!,
      item.done!,
      item.problems!,
      item.percentage!
    );
    progressList.push(progress);
  });

  return progressList;
}


export { getProgress}