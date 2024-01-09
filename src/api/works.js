import PocketBase from "pocketbase";

export const pb = new PocketBase("https://clients.pockethost.io");

export const works =async()=>{ await pb.collection("works").getList(1, 50)};
