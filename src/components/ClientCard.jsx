import { IconFile } from "@tabler/icons-react";
export default function ClientCard({ client }) {
  return (
    <div className="card bg-[#111823] shadow-xl">
      <figure className=" p-11">
        <IconFile size={162} />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{client}</h2>

        <div className="card-actions justify-center">
          <button className="btn btn-primary">look out</button>
        </div>
      </div>
    </div>
  );
}
