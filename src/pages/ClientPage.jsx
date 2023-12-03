import { useParams } from "react-router-dom";
import { useState, useEffect, useCallback } from "react";
import Loader from "../components/Loader";
import Navbar from "../components/Navbar";
import PocketBase from "pocketbase";

export default function ClientPage() {
  const pb = new PocketBase("https://clients.pockethost.io");
  pb.autoCancellation(false);
  const { id } = useParams();
  const [client, setClient] = useState(null);
  const [error, setError] = useState(null);

  const fetchData = useCallback(async () => {
    try {
      const data = await pb.collection("clients").getOne(id);
      setClient(data);
    } catch (error) {
      setError(`Error al obtener datos del cliente: ${error.message}`);
    }
  }, [id]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  if (error) {
    console.log(error);
  }

  if (!client) {
    return (
      <div className="w-full flex flex-col items-center p-14">
        <Loader />
      </div>
    );
  }

  // Renderizar la información del cliente
  return (
    <div className="w-full flex ">
      <Navbar />
      <div className=" m-20 w-full">
        <div className={`inline-block w-12 h-12 mr-3 rounded-full bg-gray-200`}>
          <div className="flex items-center justify-center w-full h-full  text-xl font-medium text-gray-500 uppercase">
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
            <button className="flex items-center h-9 w- px-4 py-2 font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-600 rounded-lg hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80">
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
            <div className=" max-w-sm">
              <div className="flex justify-between mt-4">
                <div className="text-sm text-gray-500">Nombre</div>
                <div className="text-sm">
                  {client.name} {client.lastNames}
                </div>
              </div>
              <div className="flex justify-between mt-4">
                <div className="text-sm text-gray-500">Telefono</div>
                <div className="text-sm">{client.phone}</div>
              </div>
              <div className="flex justify-between mt-4">
                <div className="text-sm text-gray-500">Ciudad</div>
                <div className="text-sm">{client.city}</div>
              </div>
              <div className="flex justify-between mt-4">
                <div className="text-sm text-gray-500">Pais</div>
                <div className="text-sm">{client.country}</div>
              </div>
              <div className="flex justify-between mt-4">
                <div className="text-sm text-gray-500">Codigo Postal</div>
                <div className="text-sm">{client.zipCode}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
