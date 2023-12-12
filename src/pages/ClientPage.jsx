import { useParams } from "react-router-dom";
import { useState, useEffect, useCallback } from "react";
import Loader from "../components/Loader";
import Navbar from "../components/Navbar";
import PocketBase from "pocketbase";
import ClientInfo from "../components/ClientInfo";
export default function ClientPage() {
  const pb = new PocketBase("https://clients.pockethost.io");
  pb.autoCancellation(false);
  const { id } = useParams();
  const [client, setClient] = useState(null);
  const [earns, setEarns] = useState(0);
  const [error, setError] = useState(null);

  const fetchData = useCallback(async () => {
    try {
      const data = await pb.collection("clients").getOne(id);
      const earn = await pb.collection("works").getList(1, 50, {
        filter: 'workUser.id="' + id + '"',
        fields: "price",
      });

      setClient(data);
      setEarns(earn);
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

  // if (!client) {
  //   return (
  //     <div className="w-full flex flex-col items-center p-14">
  //       <Loader />
  //     </div>
  //   );
  // }

  // Renderizar la información del cliente
  return (
    <div className="w-full flex ">
      <Navbar />
      {client ? (
        <ClientInfo client={client} earns={earns} />
      ) : (
        <div className="w-full h-screen flex items-center justify-center">
          <Loader />
        </div>
      )}
    </div>
  );
}
