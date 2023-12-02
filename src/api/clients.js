import PocketBase from "pocketbase";

export const pb = new PocketBase("https://clients.pockethost.io");

export const clients = await pb.collection("clients").getList(1, 50);

export const clientData = await pb.collection("clients").get("client_id");
