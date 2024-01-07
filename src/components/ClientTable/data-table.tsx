import { Client } from "./columns";
import PocketBase from "pocketbase";

export const data: Client[] = [
  {
    id: "1",
    Name: "John",
    lastNames: "Doe",
    email: "john@gmail.com",
    phone: "123456789",
    color: "red",
  },
  {
    id: "2",
    Name: "Jane",
    lastNames: "Doe",
    email: "fdsjklhfds@gmail.com",
    phone: "123456789",
    color: "blue",
  },
  {
    id: "3",
    Name: "John",
    lastNames: "Smith",
    email: "uiofduoisfd@gmail.com",
    phone: "123456789",
    color: "green",
  },
];

export async function getData() {
  const pb = new PocketBase("https://clients.pockethost.io");
  const resultList = await pb.collection("clients").getList(1, 50);
  return resultList.items;
}

getData().then((data) => {
  console.log(data); // Aquí data es el JSON, no la promesa
});
