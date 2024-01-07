import PocketBase from "pocketbase";

export async function getData() {
  const pb = new PocketBase("https://clients.pockethost.io");
  const resultList = await pb.collection("works").getFullList({
    filter: 'created >= "2022-01-01 00:00:00" && status = "success"',
  });
  return resultList;
}
