import { getTopUserApi } from "../api/getTopUserApi";
import { TopUser } from "../topUser";

async function getTopUsers(page: number, perPage: number): Promise<TopUser[]> {
  const response = await getTopUserApi({ page, perPage });
  const topUsers = [] as TopUser[];
  response.data!.forEach((item) => {
    const user = new TopUser(
      item.id!,
      item.name!,
      item.age!,
      item.avatar!,
      item.phone!,
      item.university!,
      item.slogan!,
      item.gender!,
      item.address!,
      item.rank!
    );
    topUsers.push(user);
  });

  return topUsers;
}

export { getTopUsers };
