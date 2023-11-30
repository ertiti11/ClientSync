import ClientCard from "./ClientCard";
import { clients } from "../api/clients";

export default function ClientCardList() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {clients.items.map((client) => (
        <ClientCard key={client.collectionId} client={client.name} />
      ))}
    </div>
  );
}
