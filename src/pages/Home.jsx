import Navbar from "../components/Navbar";
import { useState } from "react";
import ClientCardList from "../components/ClientCardList";
import {
  IconInfoSquareRoundedFilled,
  IconCategory2,
} from "@tabler/icons-react";
export default function Home() {
  const [size, setSize] = useState(64);
  return (
    <>
      <div className=" flex ">
        <Navbar />
        <div className="w-full flex flex-col items-center p-14">
          <div className="flex w-full rounded-2xl mb-4 overflow-hidden max-h-[200px]">
            <img
              src="https://images.unsplash.com/photo-1700495723803-f7a005efe2a4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MjA2NzV8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MDEyMDMwNTB8&ixlib=rb-4.0.3&q=80&w=1080"
              className="w-full object-cover rounded-2xl"
            />
          </div>
          <div className="w-full flex justify-between mb-4">
            <div className="flex gap-3 justify-center items-center">
              <IconInfoSquareRoundedFilled size={64} />
              <h1 className="text-2xl font-bold">Clientes</h1>
            </div>
            <div className="flex items-center">
              <IconCategory2 className="hover:cursor-pointer hover:scale-125 transition-transform" />
            </div>
          </div>
          <ClientCardList />
        </div>
      </div>
    </>
  );
}
