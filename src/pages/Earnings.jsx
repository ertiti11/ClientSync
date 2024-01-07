import Navbar from "../components/Navbar";
import Resume from "../components/Earnings/Resume";
import EChart from "../components/Earnings/EChart";
export default function Earnings() {
  return (
    <div className="bg-background">
      <Navbar />
      <div className=" ml-16 w-full h-screen p-12">
        {/* 3 col grid */}
        <div className="w-full grid grid-cols-3 gap-10">
          <Resume className="col-span-1" />
          <EChart className="col-span-3" />
        </div>
      </div>
    </div>
  );
}
