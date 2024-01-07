import Navbar from "../components/Navbar";
import Resume from "../components/Earnings/Resume";
export default function Earnings() {
  return (
    <div>
      <Navbar />
      <div className=" ml-16 w-full flex flex-col items-center p-14">
        <Resume />
      </div>
    </div>
  );
}
