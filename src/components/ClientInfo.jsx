import user from "../assets/user.svg";
import phone from "../assets/phone.svg";
import email from "../assets/at.svg";
import color from "../assets/color-filter.svg";
import date from "../assets/date.svg";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

export default function ClientInfo({ client, earns }) {
  ClientInfo.propTypes = {
    client: PropTypes.shape({
      name: PropTypes.string,
      lastNames: PropTypes.string,
      email: PropTypes.string,
      color: PropTypes.string,
      id: PropTypes.string,
      phone: PropTypes.number,
    }),
    earns: PropTypes.number,
  };
  return (
    <div className=" m-20 w-full">
      <div
        style={{ backgroundColor: client.color ?? "#0ff" }}
        className={`inline-block w-12 h-12 mr-3 rounded-full`}
      >
        <div className="flex items-center justify-center w-full h-full  text-xl font-medium text-white uppercase">
          {client.name[0]}
        </div>
      </div>
      <div className="flex flex-col justify-center w-full">
        <div className="w-full flex justify-between">
          <div>
            <div className="font-medium text-2xl mt-4">
              {client.name} {client.lastNames}
            </div>
            <div className="text-sm mt-4">{client.email}</div>
          </div>
          <button className="hidden sm:flex items-center h-9 w- px-4 py-2 font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-600 rounded-lg hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80">
            {" "}
            <svg
              className="w-5 h-5 mx-1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z"
                clipRule="evenodd"
              />
            </svg>
            <span className="mx-1">editar</span>
          </button>
        </div>
        <div className="mt-14">
          <h2 className=" uppercase text-gray-500">informacion</h2>
          <div className=" max-w-xs">
            <div className="flex justify-between mt-4">
              <div className="flex items-center gap-2">
                <img src={user} alt="" />
                <p className="text-sm ">Nombre</p>
              </div>

              <p className="text-sm">
                {client.name} {client.lastNames}
              </p>
            </div>
            <div className="flex justify-between mt-4">
              <div className="flex gap-2">
                <img src={phone} alt="" />
                <p className="text-sm ">Telefono</p>
              </div>

              <p className="text-sm">{client.phone}</p>
            </div>
            <div className="flex justify-between mt-4">
              <div className="flex gap-2">
                <img src={email} alt="" />
                <p className="text-sm ">Email</p>
              </div>
              <p className="text-sm">{client.email}</p>
            </div>
            <div className="flex justify-between mt-4">
              <div className="flex gap-2">
                <img src={color} alt="" />
                <p className="text-sm ">Color</p>
              </div>
              <div
                style={{ backgroundColor: client.color }}
                className="inline-block w-4 h-4 mr-3 rounded-full bg-gray-200"
              ></div>
            </div>
            <div className="flex justify-between mt-4">
              <div className="flex gap-2">
                <img src={date} alt="" />
                <p className="text-sm ">Fecha de creación</p>
              </div>
            </div>

            <div className=" border-b-2 border-gray-200 border-opacity-20">
              <h2 className="mt-16 font-bold text-2xl mb-4">Facturación</h2>
            </div>
            <div className=" py-12">
              <div className="stats shadow">
                <div className="stat place-items-center">
                  <Link
                    to={`/client/works/${client.id}`}
                    className="stat-title"
                  >
                    Trabajos
                  </Link>
                  <div className="stat-value">{earns.items.length}</div>
                </div>

                <div className="stat place-items-center">
                  <div className="stat-title">Facturado</div>
                  <div className="stat-value text-secondary">
                    {/* suma de todos los earns.items */}
                    {earns.items.reduce((a, b) => a + b.price, 0)}€
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
