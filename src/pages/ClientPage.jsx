import { useParams } from "react-router-dom";

export default function ClientPage() {
  const { id } = useParams();

  return <div>{id}</div>;
}