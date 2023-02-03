import getTopCoderApi from "../api/getTopCoderApi";
import Coder from "@/coder/coder";

async function getTopCoders(page: number, perPage: number) {
  const response = await getTopCoderApi({ page, perPage });
  const topCoders: {
    coder: Coder,
    rank: number
  }[] = [];
  if (response.data === null)
    throw new Error("No data for api topCoder")
  response.data!.forEach((item) => {
    const coder = new Coder(item.id!);
    coder.name = item.name;
    coder.age = item.age;
    coder.avatar = item.avatar;
    topCoders.push({
      coder,
      rank: item.rank
    });
  });

  return topCoders;
}

export { getTopCoders };
