import Navbar from "../components/Navbar";
import ClientCardList from "../components/ClientCardList";
import AddClient from "../components/AddClient";
export default function Home() {
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
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="icon icon-tabler icon-tabler-info-square-rounded-filled"
                width="64"
                height="64"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path
                  d="M12 2l.642 .005l.616 .017l.299 .013l.579 .034l.553 .046c4.687 .455 6.65 2.333 7.166 6.906l.03 .29l.046 .553l.041 .727l.006 .15l.017 .617l.005 .642l-.005 .642l-.017 .616l-.013 .299l-.034 .579l-.046 .553c-.455 4.687 -2.333 6.65 -6.906 7.166l-.29 .03l-.553 .046l-.727 .041l-.15 .006l-.617 .017l-.642 .005l-.642 -.005l-.616 -.017l-.299 -.013l-.579 -.034l-.553 -.046c-4.687 -.455 -6.65 -2.333 -7.166 -6.906l-.03 -.29l-.046 -.553l-.041 -.727l-.006 -.15l-.017 -.617l-.004 -.318v-.648l.004 -.318l.017 -.616l.013 -.299l.034 -.579l.046 -.553c.455 -4.687 2.333 -6.65 6.906 -7.166l.29 -.03l.553 -.046l.727 -.041l.15 -.006l.617 -.017c.21 -.003 .424 -.005 .642 -.005zm0 9h-1l-.117 .007a1 1 0 0 0 0 1.986l.117 .007v3l.007 .117a1 1 0 0 0 .876 .876l.117 .007h1l.117 -.007a1 1 0 0 0 .876 -.876l.007 -.117l-.007 -.117a1 1 0 0 0 -.764 -.857l-.112 -.02l-.117 -.006v-3l-.007 -.117a1 1 0 0 0 -.876 -.876l-.117 -.007zm.01 -3l-.127 .007a1 1 0 0 0 0 1.986l.117 .007l.127 -.007a1 1 0 0 0 0 -1.986l-.117 -.007z"
                  strokeWidth="0"
                  fill="currentColor"
                />
              </svg>
              <h1 className="text-2xl font-bold">Clientes</h1>
            </div>
            <div className="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="hover:cursor-pointer hover:scale-125 transition-transform"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M14 4h6v6h-6z" />
                <path d="M4 14h6v6h-6z" />
                <path d="M17 17m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
                <path d="M7 7m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
              </svg>
            </div>
          </div>
          <ClientCardList />
          <button
            className="btn"
            onClick={() => {
              const dialog = document.getElementById("AddUser");
              if (dialog) {
                dialog.setAttribute("open", "");
              }
            }}
          >
            open modal
          </button>
          <AddClient />
        </div>
      </div>
    </>
  );
}
