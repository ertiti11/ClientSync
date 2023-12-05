import { useParams } from "react-router-dom";
import PocketBase from "pocketbase";
import { useState, useEffect, useCallback } from "react";

export default function ClientWorks() {
  const { id } = useParams();
  const pb = new PocketBase("https://clients.pockethost.io");
  const [error, setError] = useState(null);
  const [works, setWorks] = useState();
  const fetchData = useCallback(async () => {
    try {
      const workData = await pb.collection("works").getList(1, 50, {
        filter: 'workUser.id="' + id + '"',
      });
      setWorks(workData);
    } catch (error) {
      setError(`Error al obtener datos del cliente: ${error.message}`);
    }
  }, [id]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return (
    <div className="w-full flex ">
      {error && <div className="text-red-500">{error}</div>}
      {console.log(works)}
      <div className=" m-20 w-full">
        <div className="flex flex-col items-center">
          <h1 className="text-4xl font-bold">Trabajos</h1>
          <div className="w-full flex flex-col items-center">
            {works?.items.map((work) => (
              <div
                key={work.id}
                className="w-full flex flex-col items-center bg-gray-500 p-4 m-4 rounded-md"
              >
                <h1 className="text-2xl font-bold">{work.title}</h1>
                <p className="text-xl">{work.description}</p>
                <p className="text-xl">{work.price}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
