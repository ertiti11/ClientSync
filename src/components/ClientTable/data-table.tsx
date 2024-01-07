import PocketBase from "pocketbase";

export async function getData() {
  const pb = new PocketBase("https://clients.pockethost.io");
  const resultList = await pb.collection("clients").getList(1, 50);
  return resultList.items;
}
