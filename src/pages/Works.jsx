import { works } from "../api/works";

export default function Works() {
  return works.items.map((work) => {
    return (
      <div
        key={work.id}
        style={{ width: "15rem", height: "15rem" }}
        className=" border-2 rounded-xl"
      >
        <h2>{work.title}</h2>
      </div>
    );
  });
}
